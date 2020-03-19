<template>
  <div id="goodsPic">
    <div class="pic">
      <p>编辑</p>
      <img src="../../assets/images/empty.jpg" alt>
    </div>
    <div class="account">
      <button></button>
      <h2>全选</h2>
      <p class="total">
        合计:
        <span>￥:0.00</span>
      </p>
      <div class="count">结算</div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
#goodsPic {
  width: 7.5rem;
  .pic {
    width: 7.5rem;
    height: 10.5rem;
    border-top: 1px solid #e2e1e6;
    display: flex;
    justify-content: flex-end;
    p {
      margin-top: 0.22rem;
      margin-right: 0.3rem;
      color: #e76300;
      font-size: 0.26rem;
    }
    img {
      width: 3.4rem;
      height: 3.85rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  .account {
    width: 7.5rem;
    height: 0.9rem;
    border-top: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    position: relative;
    button {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 100%;
      background: transparent;
      position: absolute;
      top: 0.25rem;
      left: 0.2rem;
    }
    h2 {
      position: absolute;
      top: 0.37rem;
      left: 0.81rem;
      font-size: 0.26rem;
      color: #1b1b1b;
    }
    .total {
      position: absolute;
      top: 0.37rem;
      right: 2.46rem;
      font-size: 0.26rem;
      color: #868686;
      font-weight: 900;
      span {
        color: #e74853;
      }
    }
    .count {
      position: absolute;
      top: 0;
      right: 0;
      width: 2.2rem;
      height: 0.9rem;
      background: #e67634;
      font-weight: 900;
      font-size: 0.3rem;
      line-height: 0.9rem;
      text-align: center;
      color: #e2ffff;
    }
  }
}
</style>
