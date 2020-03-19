<template>
  <div id="login">
    <van-nav-bar title="登录"/>
    <div class="message">
      <p class="phone">
        <input type="text" placeholder="请输入手机号码" v-model="phone">
        <button class="send" @click="send">发送</button>
      </p>
      <input type="text"  placeholder="短信验证码" v-model="code" class="short">
    </div>
    <div class="button" @click="login">登录</div>
  </div>
</template>

<script>
import {verificationCode,loginPage} from '@/api/api'
export default {
  data() {
    return {
      phone: '',
      code: ''
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    send(){
      verificationCode(this.phone).then((res) => {
        console.log(res)
      })
    },
    login(){
      loginPage(this.phone, this.code).then((res)=>{
        console.log(res);
        if(res.status==="0") {
          localStorage.setItem("token", res.result.token)
          this.$router.push('/myself')
        }else {
          console.log(err)
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
#login {
  display: flex;
  flex-direction: column;
  .message {
    width: 7.5rem;
    height: 2.5rem;
    padding: 0.2rem 0.36rem 0;
    .phone {
      height: 1rem;
      display: flex;
      justify-content: space-between;
      input {
        width:80%;
        height:1rem;
        border: 0;
        outline: none;
        font-size: 0.28rem;
        color: #272727;
        border-bottom: 1px solid #ccc;
      }
      .send {
        width:1.5rem;
        height:1rem;
        font-size: 0.28rem;
        color: #272727;
        padding-right: .2rem;
        background: #ccc;
        line-height: 1rem;
      }
    }
    .short {
      display: block;
      width:6.7rem;
      height: 1.2rem;
      font-size: 0.28rem;
      color: #272727;
      line-height: 1.2rem;
      border: 0;
      outline: none;
      border-bottom: 1px solid #ccc;
    }
  }
  .button {
    margin-top: .4rem;
    font-size: .28rem;
    width:6.8rem;
    height:1rem;
    line-height: 1rem;
    text-align: center;
    background: lightblue;
    align-self: center;

  }
}
</style>
