<template>
  <div id="goodsInfo">
    <ul class="goodsInfo">
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
      </li>
      <li class="goods">
        <img src="../assets/images/milk.jpg" alt>
        <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
        <p class="current_price">￥350.00</p>
        <p class="original_price">￥498.00</p>
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
.goodsInfo {
  width: 7.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .goods {
    width: 3.38rem;
    height: 4.64rem;
    margin-top: 0.24rem;
    display: flex;
    flex-direction: column;
    padding: 0 0.22rem;
    img {
      width: 2rem;
      height: 2.2rem;
      margin-top: 0.3rem;
      align-self: center;
    }
    .title {
      color: #313131;
      font-size: 0.2rem;
      font-weight: 700;
      margin-top: 0.74rem;
    }
    .current_price {
      font-size: 0.26rem;
      color: #f06b86;
      margin-top: 0.2rem;
    }
    .original_price {
      color: #313131;
      font-size: 0.16rem;
      margin-top: 0.1rem;
    }
  }
}
</style>
