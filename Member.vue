<template>
  <div id="member">
    <van-nav-bar title="会员资料" left-arrow @click-left="onClickLeft"/>
    <ul class="personalInfo">
      <li class="ul-li">
        <p>头像</p>
        <div>
          <img v-if="avator" :src="avator" alt>
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>账号</p>
        <div>
          {{ number ? number : '未填写' }}
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>姓名</p>
        <div>
          {{ name ? name : '未填写' }}
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>手机</p>
        <div>
          {{ phone ? phone : '未填写' }}
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>邮箱</p>
        <div>
          {{ email ? email : '未填写' }}
          <span>></span>
        </div>
      </li>
    </ul>
    <div class="address">
      <div class="addressContent">
        <p class="management">地址管理</p>
        <span>></span>
      </div>
    </div>
    <div class="person">
      <nav class="password">
        <li class="nav-li first">
          <p class="alter">修改密码</p>
          <span>></span>
        </li>
        <li class="nav-li">
          <p class="other">其他账号</p>
          <span>></span>
        </li>
      </nav>
    </div>
    <div class="exit">
      <div class="exitContent">
        <p class="exitAccount">退出账号</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      avator: "",
      number: "",
      phone: "",
      email: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>
<style lang='scss' scoped>
#member {
  display: flex;
  flex-direction: column;
  .van-nav-bar .van-icon {
    color: #272727;
    vertical-align: middle;
    border-bottom: 1px solid #f1f1f1;
  }
  p {
    font-size: 0.26rem;
    color: #363636;
  }
  span {
    margin-left: 0.27rem;
    font-size: 0.22rem;
    color: #878787;
  }
  .personalInfo {
    width: 7.5rem;
    height: 6.06rem;
    padding: 0 0.36rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    .ul-li {
      height: 1.22rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
    }
  }
  .address {
    width: 7.5rem;
    padding-top: 0.2rem;
    background: #f6f6f6;
    .addressContent {
      width: 7.5rem;
      padding-top: 0.2rem;
      height: 1.21rem;
      padding: 0 0.36rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
    }
  }
  .person {
    width: 7.5rem;
    height: 2.43rem;
    background: #f6f6f6;
    padding-top: 0.2rem;
    .password {
      height: 2.43rem;
      background: #fff;
      padding: 0 0.36rem;
      display: flex;
      flex-direction: column;
      .nav-li {
        height: 1.21rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .first {
        border-bottom: 1px solid #f1f1f1;
      }
    }
  }
  .exit {
    width: 7.5rem;
    padding-top: 0.2rem;
    background: #f6f6f6;
    .exitContent {
      height: 1.21rem;
      padding: 0 0.36rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }
  }
}
</style>
