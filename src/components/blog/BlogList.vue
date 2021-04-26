<template>
  <div class="bloglist-container" ref="mainContainer" v-loading='isLoading'>
      <ul>
          <li v-for="item in data.rows" :key="item.id">
              <div class="blog-img" v-if="item.thumb">
                  <RouterLink :to="{name:'BlogDetail', params:{id:item.id}}">
                      <img v-lazy="item.thumb" :alt="item.title" :title="item.title" >
                  </RouterLink>
              </div>
              <div class="main">
                  <RouterLink :to="{name:'BlogDetail', params:{id:item.id}}">
                      <h2>{{item.title}}</h2>
                  </RouterLink>
                  <div class="aside">
                    <span>日期：{{formDate(item.createDate)}}</span>
                    <span>浏览：{{item.scanNumber}}</span>
                    <span>评论:{{item.commentNumber}}</span>
                    <RouterLink :to="{name:'BlogPage', params:{categoryId: item.category.id}}">{{item.category.name}}</RouterLink>
                  </div>
                  <div class="desc">
                    {{item.description}}
                  </div>
              </div> 
          </li>
      </ul>
      <Pager :current="routerInfo.page" :total="data.total" v-if="data.total" :limit='routerInfo.limit' @pageChange='handlePageChange'/>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetch from "@/mixins/fetch.js";
import {getBlogs} from "@/api/blog.js";
import formDate from "@/utils/formDate.js"
import MainScoll from "@/mixins/mainScroll.js"
export default {
    mixins:[fetch({}),MainScoll()],
    components:{
        Pager,
    },
    computed:{
        routerInfo(){
             const categoryId = +this.$route.params.categoryId || -1;
             const page = +this.$route.query.page || 1;
             const limit = +this.$route.query.limit || 10;
             return {
                 categoryId,page,limit
             }
        }
    },
    methods:{
        async fetchData () {
            return await getBlogs(
                this.routerInfo.page,
                this.routerInfo.limit,
                this.routerInfo.categoryId
            )
        },
        handlePageChange(newPage){
            const query = {
                page: newPage,
                limit: this.routerInfo.limit
            }
            // 当前没有分类
            // /article?page=${newPage}&limit=${this.routeInfo.limit}
            if (this.routerInfo.categoryId === -1){
                this.$router.push({
                    name:'Blog',
                    query
                })
            }else{
                this.$router.push({
                    name:'BlogPage',
                    query,
                    params:{
                        categoryId:this.routerInfo.categoryId
                    }
                })
            }
        },
        formDate,
        // handleScroll () {
        //     this.$bus.$emit('mainScroll', this.$refs.container)
        // },
        // handleToTop (top) {
        //     this.$refs.container.scrollTop = top;
        // }
    },
    watch:{
        async $route(){
            this.isLoading = true;
            this.$refs.mainContainer.scrollTop = 0;
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    },
    // mounted(){
    //     this.$bus.$on('toTop' ,this.handleToTop)
    //     this.$refs.container.addEventListener("scroll", this.handleScroll)
    // },
    // beforeDestroy(){
    //     this.$bus.$emit('mainScroll')
    //     this.$bus.$off('toTop' ,this.handleToTop)
    //     this.$refs.container.removeEventListener("scroll",this.handleScroll)
    // },
 
}
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.bloglist-container{
    line-height: 1.7;
    position: relative;
    overflow-y: scroll;
    padding: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
}
li{
    display: flex;
    padding: 15px 0 ;
    border-bottom: 1px solid @gray;
    .blog-img{
        flex: 0 0 auto;
        margin-right: 15px;
        img{
            display: block;
            max-width: 200px;
            border-radius: 5px;
        }
    }
    .main{
        flex: 1 1 auto;
        h2{
            margin: 0;
        }
    }
    .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}

</style>