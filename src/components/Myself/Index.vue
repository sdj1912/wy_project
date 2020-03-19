<template>
  <div id="myself">
    <Header title="会员中心"></Header>
    <div class="headPortraits">
      <div class="headWrap" @click="jump" v-if="!nickName">
        <button class="head" ></button>
        <p>立即登录</p>
      </div>
      <div v-else class="headWrap">
        <img :src="avatarImg" alt="" class="head">
        <p>{{nickName}}</p>
      </div>
    </div>
    <Received></Received>
    <Order></Order>
  </div>
</template>

<script>
import Header from "@/components/Public/Header";
import Received from "@/components/Myself/Received";
import Order from "@/components/Myself/Order";
import { personalInfo } from "@/api/api";
export default {
  data() {
    return {
      nickName: '',
      sex: '',
      avatarImg: ''
    };
  },

  components: {
    Header,
    Received,
    Order
  },

  computed: {},

  mounted() {
    if(localStorage.getItem("token")){
       personalInfo(localStorage.getItem("token")).then((res) => {
        if (res.status == 0) {
          this.nickName = res.result.nickName;
          this.sex = res.result.sex;
          this.avatarImg = res.result.avatarImg;
        }
      })
    }
  },

  methods: {
    jump() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang='scss' scoped>
.headPortraits {
  width: 7.5rem;
  height: 2.61rem;
  background: #ec8161;
  display: flex;
  align-items: center;
  .headWrap {
    width: 3rem;
    height: 1.21rem;
    margin-left: 0.39rem;
    .head {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 1.2rem;
      background: #fff;
      float: left;
    }
    p {
      font-size: 0.24rem;
      color: #fff;
      margin-left: 0.2rem;
      float: left;
      line-height: 1.21rem;
    }
  }
}
</style>
