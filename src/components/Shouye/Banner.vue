<template>
  <div id="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img v-bind:src="item" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanner } from "@/api/api";

export default {
  data() {
    return {
      bannerList: [],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getBannerList();
  },

  methods: {
    getBannerList() {
      getBanner().then(res => {
        if (res.status === "0") {
          let datas = res.result.list;
          this.bannerList = datas;
        } else {
          console.log(res.msg);
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#banner {
  width: 7.5rem;
  height: 4.14rem;
  background: lightcoral;
  position: relative;
  .my-swipe {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
