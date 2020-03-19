<template>
  <div id="received">
    <header>
      <h2>我的订单</h2>
      <span class="arrows">></span>
    </header>
    <ul class="huowu">
      <li>
        <span class="iconfont icon-ziyuan"></span>
        <p>待付款</p>
      </li>
      <li>
        <span class="iconfont icon-daifahuo"></span>
        <p>待发货</p>
      </li>
      <li>
        <span class="iconfont icon-shoucangtubiao-"></span>
        <p>待收货</p>
      </li>
      <li>
        <span class="iconfont icon-yishouhuo"></span>
        <p>已收货</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
#received {
  width: 7.5rem;
  height: 2.34rem;
  background: greenyellow;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  header {
    width: 7.5rem;
    height: 0.73rem;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-top: .2rem;
    h2 {
      font-size: 0.26rem;
      color: #272727;
      margin-left: 0.32rem;
    }
    .arrows {
      font-size: 0.24rem;
      color: #7d7d7d;
      margin-right: 0.32rem;
    }
  }
  .huowu {
    width: 7.5rem;
    height: 1.43rem;
    display: flex;
     background: #fff;
    li {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 0.38rem;
        margin-bottom: 0.16rem;
      }
      p {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
