<template>
    <ul class="RightList-container">
        <li v-for="(item,i) in list" :key="i" >
            <span @click="handleClick(item)" :class="{selected: item.isSelect}" >
                {{item.name}}
            </span>
            <span @click="handleClick(item)" class="aside" :class="{selected: item.isSelect}">
                {{item.aside}}
            </span>
            <RightList :list="item.children" @select="handleClick" />
        </li>
    </ul>
</template>

<script>
export default {
    name:"RightList",
    props:{
        list:{
            type:Array,
            default: ()=>[]
        }
    },
    methods:{
        handleClick(item){
            this.$emit('select', item)
        }
    }

}
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
    .RightList-container{
        list-style: none;
        padding: 0;
        &.RightList-container{
            margin-left: 1em;
        }
        li{
            min-height: 40px;
            line-height: 40px;
            cursor: pointer;
            .selected {
            color: @warn;
            font-weight: bold;
            }
        }
    }
    .aside {
        font-size: 12px;
        margin-left: 1em;
        color: @gray;
    }
</style>