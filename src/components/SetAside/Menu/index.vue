<template>
    <nav class="menu-container">
        <router-link v-for="item in items" :key="item.name" :to="{name:item.name}" :exact="item.exact" active-class="selected">
            <div class="icon"><Icon :type='item.icon'/></div>
            <span>{{item.title}}</span>
        </router-link>
    </nav>
</template>

<script>
import Icon from "@/components/Icon/index.vue";

export default {
    components:{
        Icon
    },
    data() {
        return {
            items:[
                {
                    name:"Home",
                    title:"首页",
                    icon:"home",
                    exact: true
                },
                {
                    name:"Blog",
                    title:"文章",
                    icon:"blog",
                    exact: false
                },
                {
                    name:"Project",
                    title:"项目&效果",
                    icon:"code",
                    exact: true
                },
                {
                    name:"Message",
                    title:"留言板",
                    icon:"chat",
                    exact: true
                },
                {
                    name:"login",
                    title:"登录",
                    icon:"about",
                    exact: true
                },
            ]
        }
    },
}
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{
        display: block;
        display: flex;
        padding: 0 50px;
        align-items: center;
        height: 45px;
        .icon{
            width: 24px;
        }
        &:hover{
            color: white;
        }
        &.selected{
            background: #2d2d2d;
        }
    }
}
</style>