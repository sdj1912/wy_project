<template>
  <div id="goodsDetail">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft"/>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in goodsDetail.imgArr" :key="index">
        <img :src="item" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <p class="current_price">
      ￥
      <span>{{goodsDetail.currentPrice}}</span>
      <button>会员专享</button>
    </p>
    <p class="original_price">
      <span>普通价</span>
      ￥{{goodsDetail.originalPrice}}
    </p>
    <h2 class="title">{{goodsDetail.describe}}</h2>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getGoodsDetail } from "@/api/api";
export default {
  data() {
    return {
      goodsDetail: {},
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  },

  computed: {},

  mounted() {
    this.getGoodsDetail();
  },

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    getGoodsDetail() {
      getGoodsDetail().then(res => {
        if (res.status === "0") {
          let datas = res.result;
          this.goodsDetail = datas;
        } else {
          console.log(res.msg);
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#goodsDetail {
  width: 7.5rem;
  border-top: 1px solid #dedede;
  height: 9.6rem;
  display: flex;
  flex-direction: column;
  .van-nav-bar .van-icon {
    color: #272727;
    vertical-align: middle;
  }
  .swiper-container {
    margin: 0;
  }
  .swiper-slide {
    text-align: center;
    img {
      width: 5rem;
      height: 5.3rem;
    }
  }
  .current_price {
    color: #ce5e2e;
    font-size: 0.2rem;
    margin-top: 1.14rem;
    margin-left: 0.1rem;
    span {
      font-size: 0.36rem;
      margin-right: 0.18rem;
    }
    button {
      width: 1.1rem;
      height: 0.3rem;
      background: #fbe3d9;
      border-radius: 0.15rem;
      font-size: 0.18rem;
      color: #bb6e50;
    }
  }
  .original_price {
    font-size: 0.26rem;
    color: #5a5a5a;
    margin-left: 0.1rem;
    margin-top: 0.42rem;
    span {
      margin-right: 0.13rem;
    }
  }
  .title {
    font-size: 0.28rem;
    color: #323232;
    margin-top: 0.35rem;
  }
  .explain {
    color: #a4a4a4;
    font-size: 0.22rem;
    margin-top: 0.35rem;
  }
}
</style>
