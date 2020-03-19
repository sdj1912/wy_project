<template>
  <div>
    <div id="order">
      <div class="myOrder">
        <nav class="my">
          <li>
            <span class="iconfont icon-wodebiaodan-xian"></span>
            <p>我的表单</p>
          </li>
          <li>
            <span class="iconfont icon-wodebiaodan-xian"></span>
            <p>我的会员卡</p>
          </li>
          <li>
            <span class="iconfont icon-wodejifen"></span>
            <p>我的积分</p>
          </li>
          <li>
            <span class="iconfont icon-weibiaoti-"></span>
            <p>我的优惠券</p>
          </li>
          <li>
            <span class="iconfont icon-ziyuan1"></span>
            <p>我的余额</p>
          </li>
          <li>
            <span class="iconfont icon-wodekanjia"></span>
            <p>我的砍价</p>
          </li>
          <li>
            <span class="iconfont icon-laba"></span>
            <p>推广员中心</p>
          </li>
           <li>
            <span class="iconfont icon-weizhi1"></span>
            <p>收货人信息</p>
          </li>
        </nav>
      </div>
       <p class="end">由贝斯利提供技术支持</p>
    </div>
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
#order {
  width: 7.5rem;
  height:8.16rem;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  border-bottom:1px solid #d8d8d8;
  flex-shrink: 1;
  .myOrder {
    width: 7.5rem;
    background: #fff;
    margin-top: 0.2rem;
    border-radius: 0.2rem;
    .my {
      width: 100%;
      height: 3.16rem;
      margin-top: 0.2rem;
      background: #fff;
      border-radius: 0.2rem;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
  .end {
      font-size: .22rem;
      color:#c1c1c3;
      text-align: center;
      margin-top:.47rem;
  }
}
</style>
