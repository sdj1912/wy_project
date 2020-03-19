<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="index" icon="index-copy">
      <span class="iconfont icon-index-copy"></span>
      <p>首页</p>
    </van-tabbar-item>
    <van-tabbar-item name="classify" icon="feneli">
      <span class="iconfont icon-feneli"></span>
      <p>分类</p>
    </van-tabbar-item>
    <van-tabbar-item name="cartList" icon="gouwuche">
      <span class="iconfont icon-gouwuche"></span>
      <p>购物车</p>
    </van-tabbar-item>
    <van-tabbar-item name="myself" icon="wode2">
      <span class="iconfont icon-wode2"></span>
      <p>我的</p>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: "index"
    };
  },
  methods: {
    onChange(index) {
      this.active = index;
      this.$router.push("/" + index);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar-item--active {
  color: #ff7c38;
}
.van-tabbar-item {
  // color: #272727;
  .iconfont {
    font-size: 0.5rem;
  }
}
</style>

