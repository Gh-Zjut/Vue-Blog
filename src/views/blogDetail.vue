<template>
  <Layout>
    <template>
      <div ref="mainContainer" class="main-container" v-loading='isLoading'>
        <Detail :blog='data' v-if="data"/>
        <Blogcomment v-if="!isLoading"/>
      </div>
    </template>
    <template #right>
       <div class="right-container" v-loading='isLoading'>
          <BlogToc :toc='data.toc' v-if="data"/>
       </div>
    </template>
  </Layout>
</template>

<script>
import fetch from "@/mixins/fetch.js"
import {getBlog} from "@/api/blog.js"
import Layout from "@/components/Layout"
import Detail from "@/components/blog/Detail.vue"
import BlogToc from "@/components/blog/BlogToc.vue"
import Blogcomment from "@/components/blog/Blogcomment.vue"
import MainScoll from "@/mixins/mainScroll.js"
export default {
  mixins:[fetch(),MainScoll()],
  components:{
    Layout,
    Detail,
    BlogToc,
    Blogcomment,
  },
  methods:{
    async fetchData(){
      return await getBlog(this.$route.params.id);
    },
  },
  updated(){
    const hash = location.hash;
    location.hash = '';
    setTimeout(()=>{
      location.hash = hash;
    },500)
  }
}
</script>

<style scoped >
.main-container{
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  scroll-behavior: smooth;
}
.right-container{
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow-y: scroll;
}
</style>