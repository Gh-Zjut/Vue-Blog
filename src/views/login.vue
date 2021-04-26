<template>
  <div class="login-container"  >
    <div class="welcome-container" v-if="status==='login'" >
      <span class="hello">你好！{{user.name}}</span>  
      <div class="desc">向着目标前进吧</div>
       <button @click="handleLogout">登出</button>
    </div>
    <div v-else class="log-container" ref="container">
      <div class="title">请登录</div>
      <form action=""  @submit.prevent="handleSubmit">
        <div class="username">
          <label for="username">账号</label><input id="username" type="text" v-model="logMessage.loginId" placeholder="admin">
        </div>
        <div class="passward">
          <label for="passward">密码</label><input id="passward" type="text" v-model="logMessage.passward" placeholder="123123">
        </div>
        <button >{{loading?'loading...':'登录'}}</button>

      </form>
    </div>
    <div class="img-container">
      <img src="https://images.pexels.com/photos/401896/pexels-photo-401896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" >
    </div>

  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
export default {
  data(){
    return {
      logMessage:{
        loginId:'',
        passward:''
      }
    }
  },
  computed:{
    ...mapState("login",["loading","user"]),
    ...mapGetters("login",["status"])
  },
  methods:{
    handleSubmit(){
      this.$store.dispatch("login/logIn", this.logMessage).then((res)=>{
        console.log(111)
        if(!res){
         this.$showMessage({
              content:'账号或密码错误',
              type:'error',
              duration:2000,
              container:this.$refs.container,
          })
        }else{
          setTimeout(()=>{
                this.logMessage.loginId = '';
                this.logMessage.passward = '';
          },0)
          this.$showMessage({
              content:'登陆成功',
              type:'success',
              duration:2000,
              container:this.$refs.container,
              
          })
        }
        
      })
      
    },
    handleLogout(){
      this.$store.dispatch("login/logOut")
    }
  }
}
</script>

<style scoped lang='less'>
@import '~@/styles/var.less';
.login-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .welcome-container{
    width: 400px;
    height: 400px;
    margin: 250px auto;
    text-align: center;
    position: relative;
    .hello{
      font-size: 38px;
      color: @dark;
      letter-spacing: .3em;
    }
    .desc{
      font-size: 28px;
      color: @words;
      letter-spacing: .1em;
    }
    button{
      display: block;
      outline: none;
      padding: 3px 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      width: 90px;
      height: 40px;
      cursor: pointer;
      border: 1px solid #999;
    }
  }
  .log-container{
    width: 400px;
    height: 400px;
    margin: 250px auto;
    text-align: center;
    .username, .passward{
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
    label{
      // word-spacing: 3px
      letter-spacing: 3px;
      margin-right: 8px;
      font-weight: bold ;
    }
    input{
      width: 280px;
      padding: 7px;
      outline: none;
    }
    button{
      width: 74%;
      margin-right: -37px;
      text-align: center;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid #999;
      padding: 5px 0 ;
    }
    .title{
      font-size: 40px;
      font-weight: bolder;
      // position: relative;
      margin-bottom: 20px;
      float: left;
    }
    .title::after, .title::before{
      content: '';
      display: inline-block;
      width: 80px;
      height: 4px;
      // backgroung-color: #000;
      background-color: black;
      margin-top: 28px;
    }
    .title::before{
      float: left;
      margin-left: 40px;
      margin-right: 20px;
    }
    .title::after{
      margin-left: 20px;
      margin-right: 40px;
      float: right;
    }
  }
  .img-container{
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    position: relative;
    padding: 0 100px;
    top: -750px;
    z-index: -1;
    opacity: .9;
    img{
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>

box-sizing: border-box;
  padding: 0 100px;
  background-origin: content-box;
  background-image: url(https://images.pexels.com/photos/401896/pexels-photo-401896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
  background-position: 0 100px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;