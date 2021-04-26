<template>
  <div class="blog-detail-container"  >
      <h1>{{blog.title}}</h1>
      <div class="aside">
          <span>日期:{{formDate(blog.createDate,true)}}</span>
          <span>浏览:{{blog.scanNumber}}</span>
          <a href="#commentContainer"><span>评论:{{blog.commentNumber}}</span></a>
          <router-link :to="{name:'BlogPage',params:{categoryId:blog.category.id}}"><span>{{blog.category.name}}</span></router-link>
      </div>
      <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formDate from "@/utils/formDate.js"
import "@/styles/markdown.css"
import "highlight.js/styles/github.css"
export default {
    props:{
        blog:{
            type:Object,
            required:true
        }
    },
    methods:{
        formDate
    },
    computed:{
        
    }
}
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
.aside{
    font-size: 14px;
    color: @gray;
    span,a{
        margin-right: 15px;
    }
}
.markdown-body{
    margin: 20px 0;
}
</style>