<template>
  <div id="hot">
    <van-nav-bar title="热销榜" left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(item,index) in list" :title="item" :key="index">
        <ul class="goodsInfo">
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
          <li class="goods">
            <img src="../../assets/images/milk.jpg" alt>
            <p class="title">AUTILI澳特力乳铁蛋白调制乳粉75g</p>
            <p class="current_price">￥350.00</p>
            <p class="original_price">￥498.00</p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "皮噜娃尿不湿",
        "全球奶粉",
        "尿不湿",
        "营养辅食",
        "喂养用品",
        "宝宝洗护",
        "清洁用品",
        "孕产母乳",
        "婴幼儿服饰",
        "宝宝出行",
        "宝宝起居",
        "宝宝玩具",
        "美妆护肤",
        "成人营养",
        "女生日记",
        "成人洗护"
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.van-nav-bar .van-icon {
  color: #272727;
  vertical-align: middle;
}
.goodsInfo {
  width:7.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .goods {
    width:3.38rem;
    height:4.64rem;
    margin-top: .24rem;
    display: flex;
    flex-direction: column;
    padding:0 .22rem;
    img {
      width:2rem;
      height:2.2rem;
      margin-top: .3rem;
      align-self: center;
    }
    .title {
      color:#313131;
      font-size: .2rem;
      font-weight: 700;
      margin-top: .74rem;
    }
    .current_price {
      font-size: .26rem;
      color:#f06b86;
      margin-top: .2rem;
    }
    .original_price {
       color:#313131;
      font-size: .16rem;
      margin-top: .1rem;
    }
  }
}
</style>
