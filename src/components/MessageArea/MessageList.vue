<template>
  <ul class="message-list-container">
     <li v-for="item in list" :key="item.id">
         <Avatar :size="44" :url="item.avatar"/>
        <div class="data">
            <div class="nickname">{{item.nickname}}</div>
            <div class="content">{{item.content}}</div>
            <div class="time">{{formDate(item.createDate,true)}}</div>
        </div>
     </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar"
import formDate from "@/utils/formDate.js"
export default {
    components:{
        Avatar
    },
    props:{
        list:{
            type:Array
        }
    },
    methods:{
        formDate
    }
}
</script>

<style scpoed lang='less'>
@import "~@/styles/var.less";
.message-list-container{
    list-style: none;
    padding: 0px 20px;
    li{
        width: 100%;
        padding: 15px 0 ;
        display: flex;
        margin: 20px 0;
        position: relative;
        border-bottom: 1px dashed #ddd;
        .avatar-container{
            margin-right: 20px;
        }
        .nickname{
            font-weight: bold;
            color: @success;
            padding-bottom: 8px;
        }
        .time{
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 12px;
            color: @gray;
        }
    }
}
</style>