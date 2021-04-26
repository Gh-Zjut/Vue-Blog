<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SetAside />
        </div>
      </template>
      <template>
        <router-view></router-view>
      </template>
    </Layout>
    <toTop />
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue"
import SetAside from "./components/SetAside/index.vue";
import toTop from "@/components/toTop"
export default {
  name: "App",
  components: {
    Layout,
    SetAside,
    toTop
  },
 
};
</script>

<style scoped lang='less'>
  @import "./styles/mixin.less";
  .app-container{
    .self-fill(fixed);
  }
  .aside{
    width:250px;
    height: 100%;
  }
</style>