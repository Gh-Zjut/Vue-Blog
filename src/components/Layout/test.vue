<template>
  <div class="test-container">
      <Layout>
          <template #left>
           <div class="left">
                左侧区域，宽度自适应，溢出部分隐藏
           </div>
          </template>
          <template>
              <div class="main">
                  中间区域，宽度沾满剩余空间，溢出部分隐藏
              </div>
          </template>
          <template #right>
              <div class="right">
                  右侧区域，宽度自适应，溢出部分隐藏
              </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./index";
export default {
    components:{
        Layout
    }
}
</script>

<style scoped>
    .test-container{
        width: 60%;
        height: 600px;
        border: 2px solid black;
        margin: 0 auto;
    }
    .left{
        width:250px;
        height: 100%;
        background: blanchedalmond;
    }
    .main{
        width: 100%;
        height: 100%;
        background: aqua;
    }
    .right{
        width: 150px;
        height: 100%;
        background: darkorchid;
    }
</style>