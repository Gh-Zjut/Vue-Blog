<template>
  <div class="image-loader-container">
      <img v-if="!done" class="placeholder" :src="placeholder" alt="">
      <img :src="src" alt="" class="origin" @load="handleLoad" :style="{opacity:originOpacity, transition:`opacity ${duration}ms`}">
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:500
        }
    },
    methods:{
        handleLoad () {
            this.isLoaded = true;
            setTimeout( ()=>{
                this.done = true;
                this.$emit('load')
            },this.duration)
        }
    },
    data () {
        return {
            isLoaded: false,    //是否加载完成
            done: false
        }
    },
    computed:{
        originOpacity () {  //获取透明度的值
            return this.isLoaded? 1:0;
        }
    }
}
</script>

<style scoped lang='less'>
     @import "~@/styles/mixin.less";
    .image-loader-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img{
            .self-fill();
            object-fit: cover;
        }  
        .origin{
            opacity: 0;
            transition: opacity ;
        }
        .placeholder{
            filter: blur(2vw);
        }
    }
</style>