<template>
  <div id="basicInfo">
    <van-nav-bar title="基本信息" left-arrow @click-left="onClickLeft"/>
    <ul class="basicInformation">
      <li class="ul-li">
        <p>头像</p>
        <div>
          <img v-if="avatarImg" :src="avatarImg" alt class="avatar">
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>性别</p>
        <div>
          <input type="text" v-model="sex">
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>姓名</p>
        <div>
          <input type="text" v-model="nickName">
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>购物标签</p>
        <div>
          <span>></span>
        </div>
      </li>
      <li class="ul-li">
        <p>邀请码</p>
        <div>
          <span>></span>
        </div>
      </li>
    </ul>
    <div class="exit">
      <div class="exitContent">
        <p class="exitAccount" @click="submit">保存退出</p>
      </div>
    </div>
  </div>
</template>

<script>
import { personalInfo, alterPersonalInfo } from "@/api/api";
export default {
  data() {
    return {
      nickName: "",
      sex: "",
      token: localStorage.getItem("token"),
      avatarImg: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
    if (this.token) {
      personalInfo(this.token).then(res => {
        if (res.status === "0") {
          this.nickName = res.result.nickName;
          this.sex = res.result.sex;
          this.avatarImg = res.result.avatarImg;
        }
      });
    }
  },

  methods: {
    onClickLeft() {
      this.$router.push("/myself");
    },
    submit() {
      if (this.token) {
        alterPersonalInfo(this.token,this.nickName, this.sex).then(res => {
          console.log(res)
          this.$router.push("/myself");
        });

      }
    }
  }
};
</script>
<style lang='scss' scoped>
#basicInfo {
  display: flex;
  flex-direction: column;
  .van-nav-bar .van-icon {
    color: #272727;
    vertical-align: middle;
    border-bottom: 1px solid #f1f1f1;
  }
  .basicInformation {
    width: 7.5rem;
    padding: 0 0.36rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    .ul-li {
      height: 1.22rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      .avatar {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: .2rem;
      }
      input {
        display: inline-block;
        width:1rem;
        height:.6rem;
      }
    }
  }
  .exit {
    width: 7.5rem;
    padding-top: 0.2rem;
    display: flex;
    justify-content: center;
    .exitContent {
      width: 6rem;
      height: 1rem;
      padding: 0 0.36rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: lightblue;
    }
  }
}
</style>
