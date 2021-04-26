<template>
  <div class="comment-container" id="commentContainer">
      <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list='data.rows' :isLoading='isLoading' @submit="handleSubmit"/>
  </div>
</template>

<script>
import fetch from "@/mixins/fetch.js";
import {getComment,postComment} from "@/api/blog.js";
import MessageArea from "@/components/MessageArea/index.vue"
export default {
    mixins:[fetch({total:0,rows:[]})],
    components:{
        MessageArea
    },
    data(){
        return {
            page:1,
            limit:10
        }
    },
    computed:{
        hasMore () {
            return this.data.rows.length < this.data.total
        }
    },
    methods:{
        async fetchData(){
            return await getComment(this.$route.params.id,this.page,this.limit );
        },
        async handleSubmit (message,callback) {
            const resp = await postComment({
                blogId:this.$route.params.id,
                ...message
            })
            this.data.rows.unshift(resp);
            this.data.total++;
            callback('评论成功');
        },
        async fethMore () {
            if (!this.hasMore){
                return 
            }
            console.log(2);
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
        }
    },
    created(){
        this.$bus.$on('mainScroll', this.handleScroll);
    }
}
</script>

<style>
.comment-container{
    position: relative;
    width: 100%;
    margin-bottom: 80px;
}
</style>