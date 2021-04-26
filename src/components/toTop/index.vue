<template>
  <div v-show="show" @click="handleClick" class="toTop-container">
      TOP
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    methods:{
        handleScroll(dom){
            if(!dom){
                this.show = false;
                return
            }
            this.show = dom.scrollTop > 300
        },
        handleClick(){
            this.$bus.$emit('toTop', 0)
        }
    },
    created(){
        this.$bus.$on('mainScroll', this.handleScroll)
    }
}
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.toTop-container{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    background-color:@primary;
    position: absolute;
    right: 40px;
    bottom: 20px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>