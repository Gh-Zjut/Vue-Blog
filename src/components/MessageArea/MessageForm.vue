<template>
  <form class="message-form-container" @submit.prevent="handleSubmit" ref="form">
      <div class="form-item">
          <div class="input-area">
              <input type="text" placeholder="昵称" :maxlength="10" v-model="message.nickname" disabled>
              <span class="tip">{{message.nickname.length}}/10</span>
          </div>
          <div class="error">{{error.nickname}}</div>
      </div>
      <div class="form-item">
          <div class="text-area">
              <textarea placeholder="评论内容" :maxlength="100" v-model="message.content"></textarea>
              <span class="tip">{{message.content.length}}/100</span>
          </div>
          <div class="error">{{error.content}}</div>
      </div>
      <div class="form-item">
          <div class="button-area">
              <button>提交</button>
          </div>
      </div>
  </form>
</template>

<script>
import {postComment} from "@/api/blog.js"
export default {
    data(){
        return {
            error:{
                nickname:'',
                content:''
            },
            message:{
                nickname:'',
                content:''
            }
        }
    },
    methods:{
        handleSubmit(){
            this.error.nickname=this.message.nickname?"":'请登录'
            this.error.content= this.message.content? '':'请填写内容'
            if(this.error.nickname){
                this.$showMessage({
                    content:'即将为您跳转到登录页面',
                    type:'error',
                    duration:2000,
                    container:this.$refs.form,
                    callback:()=>{
                        this.$router.push({name:"login"});
                    }
                })
               return
            }
            if(this.error.content){
                return
            }
            this.$emit('submit' ,this.message ,(msg)=>{
                this.$showMessage({
                    content:msg,
                    type:'success',
                    duration:1000,
                    container:this.$refs.form,
                    callback:()=>{
                        this.message.content='';
                    }
                })
                
            })
        }
    },
    mounted(){
        if(this.$store.state.login.user){
            this.message.nickname = this.$store.state.login.user.name
        }
    }
}
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.message-form-container{
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}
.form-item{
    margin-bottom: 8px;
}
.input-area{
    width: 50%;
    position: relative;
}
.text-area{
    position: relative;
}
.tip{
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #ddd;
    font-size: 12px;
}
input,textarea{
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    &:focus{
        border-color: @primary;
    }
}
input{
    padding: 0 15px;
    height: 40px;
}
textarea{
    resize: none;
    padding: 8px 15px;
    height: 120px
}
.error{
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
}
button{
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100px;
    height: 34px;
    color: #fff;
    border-radius: 4px;
    background: @primary;
}
</style>