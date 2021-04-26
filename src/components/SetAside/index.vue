<template>
  <div class="setaside-container">
      <template v-if="data">
        <Avatar :url="data.avatar"  />
        <h2 class="title">{{data.title}}</h2>
      </template>
      
      <Menu />
      <Contact v-if="data"/>
  </div>
</template>

<script>
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import {mapState} from "vuex"
export default {
    components:{
        Contact,
        Menu,
        Avatar
    },
    computed:{
        ...mapState("setting", ['data'])
    }
}
</script>

<style scoped lang='less'>
@import "~@/styles/global.less";
.setaside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
}
.avatar-container{
    margin: 0 auto;
}
.title{
    font-size: 1.2em;
    text-align: center;
    color: white;
}
</style>