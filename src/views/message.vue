<template>
  <div class="main-container" ref='mainContainer'>
    <messageArea title='留言板' :list='data.rows' :isLoading='isLoading' :subTitle='`(${data.total})`' @submit="handleSubmit"/>
  </div>
</template>

<script>
import messageArea from "@/components/MessageArea/index.vue"
import MainScoll from "@/mixins/mainScroll.js"
import fetch from "@/mixins/fetch.js"
import {getComment, postComment} from "@/api/blog.js"
export default {
  mixins:[fetch({total:0, rows:[]}),MainScoll()],
  components:{
    messageArea
  },
  data(){
    return {
      page:1,
      limit:10
    }
  },
  methods:{
    async fetchData(){
      return await getComment(this.page,this.limit)
    },
    async fethMore () {
      if (!this.hasMore){
          return 
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleScroll (dom) {
      if(!dom){
          return 
      }
      const range = 100;
      if (this.isLoading) {
          return 
      }
      if (dom.scrollHeight - dom.scrollTop - dom.clientHeight < range){          
          this.fethMore();
      } 
    },
    async handleSubmit (message,callback) {
      const resp = await postComment({message})
      this.data.rows.unshift(resp);
      this.data.total++;
      callback('感谢你的评论');
    },
  },
  created(){
    this.$bus.$on('mainScroll', this.handleScroll);
  },
  computed:{
        hasMore () {
            return this.data.rows.length < this.data.total
        }
    },
}
</script>

<style scpoed lang='less'>
.main-container{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 25px 0;
  box-sizing: border-box;
}
.message-area-container{
  width: 700px;
  margin: 0 auto;
}
</style>