<template>
  <div class="project-container" ref="mainContainer" v-loading='loading'>
      <ul >
          <li v-for="(item,i) in data" :key="i">
            <div class="img-container">
                <a :href="item.url" target="_blank">
                    <img  v-lazy='item.img'>
                </a>   
            </div>
            <div class="text-content">
                <div class="title">
                    <a :href="item.url" target="_blank">{{item.title}}</a>
                </div>
                <div class="desc-container">
                    <div class="desc" v-for="(desc,i) in item.desc" :key="i">{{desc}}</div>
                </div>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
import mainScroll from "@/mixins/mainScroll"
export default {
    mixins:[mainScroll()],
    computed:{
        ...mapState("project", ["loading", "data"])
    },
    created(){
        this.$store.dispatch("project/fetchProject")
    }
}
</script>

<style scpoed lang='less'>
@import "~@/styles/var.less";
.project-container{
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ul{
        box-sizing: border-box;
        width: 100%;
        padding: 20px 50px;
        margin: 0;
    li{
        list-style: none;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        border:1px solid #ddd;
        padding: 20px;
        margin-bottom: 20px;
        transition: all .2s;

        .img-container {
            text-align: center;
            margin-right: 20px;
            img {
                width: 300px;
                height: 250px;
            }
        }
        .title{
            color: @dark;
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 25px;
        }
        .desc{
            color: @words;
            margin-bottom: 30px;
        }
        &:hover{
            box-shadow: 0px 2px 3px #000;
            transform: translateY(-3px);
        }
    }
}

}
</style>