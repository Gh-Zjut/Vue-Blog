<template>
  <div class="category-container"  v-loading='isLoading'>
    <h2 v-show="!isLoading">文章分类</h2>
    <RightList v-show="!isLoading" :list='list' @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/components/blog/RightList";
import fetch from "@/mixins/fetch.js";
import {getBlogType} from "@/api/blog.js";
export default {
  mixins:[fetch([])],
  components:{
    RightList,
  },
  methods:{
    async fetchData(){
      return await getBlogType();
    },
    handleSelect(item){
      const query = {
        page:1,
        limit: this.limit
      }
      if (item.id == -1){
        this.$router.push({
          name:'Blog',
          query
        })
      }else{
        this.$router.push({
          name:'BlogPage',
          query,
          params:{categoryId:item.id}
        })
      }
    }
  },
  computed:{
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list(){
      const total = this.data.reduce((a,b) => {
        return a + b.articleCount;
      },0)

      const result = [
        { name: "全部", id: -1, articleCount: total },
        ...this.data,
      ];

      return result.map((item)=>({
        ...item,
        isSelect:item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }))
    },
  }
}
</script>

<style scoped lang='less'>
.category-container{
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>