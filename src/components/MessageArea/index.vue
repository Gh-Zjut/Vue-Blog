<template>
    <div class="message-area-container">
        <MessageForm v-on="$listeners" />
        <h3>
            {{title}}
            <span>{{subTitle}}</span>
        </h3>
        <MessageList :list='list'/>
        <div class="loading" v-loading='isLoading'></div>
    </div>
</template>

<script>
import MessageForm from "./MessageForm.vue"
import MessageList from "./MessageList.vue"
export default {
    components:{
        MessageForm,
        MessageList
    },
    props:{
        title:{
            type:String,
            required:true
        },
        subTitle:{
            type:String,
            required:true
        },
        list:{
            type:Array,
            default:()=>[]
        },
        isLoading:{
            type:Boolean,
        }
    },
}
</script>

<style scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>