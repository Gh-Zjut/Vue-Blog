<template>
  <ul class="contact-container">
      <li>
          <a :href="data.github" target="_blank">
              <div class="icon"><Icon type='github' /></div>
              <span>{{data.githubName}}</span>
          </a>
      </li>
       <li>
          <a :href="`maito:${data.mail}`">
              <div class="icon"><Icon type='mail' /></div>
              <span>{{data.mail}}</span>
          </a>
      </li>
      <li>
          <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
              <div class="icon"><Icon type='qq' /></div>
              <span>{{data.qq}}</span>
          </a>
          <div class="pop">
              <img src="https://huyaimg.msstatic.com/avatar/1089/7c/1bad570ccab5732e7962853248aa59_180_135.jpg?1594724739?449238" alt="">
          </div>
      </li>
      <li>
          <a href="">
              <div class="icon weixin"><Icon type='weixin' /></div>
              <span>{{data.weixin}}</span>
          </a>
          <div class="pop">
              <img src="https://huyaimg.msstatic.com/avatar/1089/7c/1bad570ccab5732e7962853248aa59_180_135.jpg?1594724739?449238" alt="">
          </div>
      </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index";
import "@/styles/global.less";
import {mapState} from "vuex"
export default {
    components:{
        Icon
    },
    computed:{
         ...mapState('setting', ['data'])
    }
}
</script>

<style scoped lang='less'>
@import "~@/styles/global.less";
.contact-container{
    list-style: none;
    margin: 0;
    padding: 20px;
    color: gray;
    li{
        height: 30px;
        line-height: 30px;
        margin: 14px 0;     
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        .icon{
            width: 36px;
            font-size: 26px;
            &.weixin{
                font-size: 32px;
                text-indent: -3px;
            }
        }
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: 100%;
        padding: 15px 10px;
        background: white;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: .3s;
        &::after{
            content: '';
            display: block;
            border: 8px solid transparent;
            border-top-color: white ;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%);
        }
    }
}
</style>