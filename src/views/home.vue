<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading='loading'>
    <ul class="slider-container" :style="{
      marginTop
    }" @transitionend='handleTransitionEnd'>
      <li v-for="item in data" :key="item.id" >
        <Slider :carousel='item'/>
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index-1)">
      <Icon type='arrowUp' />
    </div>
    <div v-show="index < data.length - 1" class="icon icon-down" @click="switchTo(index+1)">
      <Icon type='arrowDown' />
    </div>
    <ul class="indicator" >
      <li v-for="(item, i) in data" :key="item.id" :class="{active: i==index}" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex"
import Slider from "@/components/Slider"
import Icon from "@/components/Icon"

export default {
  data () {
    return {
      index: 0,
      containerHeight: 0,
      isSwithing:  false,
    }
  },
  computed:{
    marginTop () {
      return -this.index * this.containerHeight + 'px'
    },
    ...mapState("banner", ["loading", 'data'])
  },
  components:{
    Slider,
    Icon
  },
  methods:{
    switchTo(i){
      this.index = i;
    },
    handleWheel(e){
      if(this.isSwithing){
        return 
      }else {
        if(e.deltaY > 5 && this.index<this.data.length - 1){
          this.index++;
          this.isSwithing = true;
        }else if (e.deltaY < -5 && this.index != 0){
          this.index--;
          this.isSwithing = true;
        }
      }
    },
    handleTransitionEnd(){
      this.isSwithing = false;
    },
    getClientHeight(){
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  created(){
    this.$store.dispatch("banner/fetchBanner")
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize",this.getClientHeight);
  },
  destroyed(){
    window.removeEventListener("resize",this.getClientHeight);
  }
}
</script>

<style scoped lang='less'>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul{
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.slider-container{
  width: 100%;
  height: 100%;
  transition: .9s;
  li{
    width: 100%;
    height: 100%;
  }
}
.icon {
  position: absolute;
  left: 50%;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up{
    top: 25px;
    animation: jump-up 2s infinite;
  }
  &.icon-down{
    top: auto;
    bottom: 25px;
    animation: jump-down 2s infinite;
  }
 
  @keyframes jump-up {
    0%{
      transform: translate(-50%, 10px);
    }
    50%{
      transform: translate(-50%, -10px);
    }
    100%{
       transform: translate(-50%, 10px);
    }
  }
  @keyframes jump-down {
    0%{
      transform: translate(-50%, -10px);
    }
    50%{
      transform: translate(-50%, 10px);
    }
    100%{
       transform: translate(-50%, -10px);
    }
  }
}

.indicator{
    position: absolute;
    top: 50%;
    left: auto;
    right: 20px;
    transform: translateY(-50%);
    li{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: @words;
      cursor: pointer;
      margin-bottom: 8px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active{
        background: #fff;
      }
    }
}
</style>