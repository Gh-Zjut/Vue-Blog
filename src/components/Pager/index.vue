<template>
  <div class="pager-container" v-if="pageNumber > 1">
      <a  @click="handleClick(1)" :class="{disabled: current === 1 }">|&lt;&lt;</a>
      <a  @click="handleClick(current - 1)" :class="{disabled: current === 1 }">&lt;</a>
      <a  v-for="(n ,i) in numbers" :key="i" :class="{active: n===current}" @click="handleClick(n)">{{n}}</a>
      <a  @click="handleClick(current + 1)"  :class="{disabled: current === pageNumber}">&gt;</a>
      <a  @click="handleClick(pageNumber)" :class="{disabled: current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        current:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default: 0
        },
        limit:{
            type:Number,
            default:10
        },
        visibleNumber:{
            type:Number,
            default:10
        }
    },
    computed:{
        pageNumber () { //总页数
            return Math.ceil(this.total / this.limit);
        },
         numbers () {
            let nums = [];
            for (let i = this.visibleMin; i <= this.visibleMax; i++){
                nums.push(i);
            }
            return nums;
        },
        visibleMin () {
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if (min < 1){
               min = 1;
            }
            return min;
        },
        visibleMax () {
            let max = this.visibleMin + this.visibleNumber - 1;
            if (max > this.pageNumber){
                max = this.pageNumber;
            } 
            return max;
        }
    },
    methods:{
        handleClick (newPage) {
            //抛出一个事件，current变化
            if (newPage < 1){
                newPage = 1;
            }
            if (newPage > this.pageNumber){
                newPage = this.pageNumber
            }
            if (newPage === this.current){
                return
            }
            this.$emit("pageChange", newPage)
        }
    }
}
</script>

<style lang="less" coped>
    @import "~@/styles/var.less";
    .pager-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    .pager-container a {
        cursor: pointer;
        color: @primary;
        margin: 0 10px;
        &.disabled{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            font-weight: bolder;
            cursor: text;
        }
    }
</style>