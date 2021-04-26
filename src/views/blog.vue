<template>
  <Layout>
    <template>
      <BlogList />
    </template>
    <template #right>
     <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from '@/components/blog/BlogList'
import BlogCategory from '@/components/blog/BlogCategory'
export default {
  components:{
    Layout,
    BlogList,
    BlogCategory
  }
}
</script>

<style>

</style>