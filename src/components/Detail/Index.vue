<template>
  <div id="detail">
    <div class="goodsDetail">
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
    <div class="choose">
      <div class="top"></div>
      <div class="bottom">
        <p class="size">
          选择
          <span>可选规格</span>
        </p>
        <span class="iconfont icon-arrow-right"></span>
      </div>
    </div>
    <div class="appraise">
      <div class="top"></div>
      <div class="bottom">
        <p class="size">
          商品评论
          <span>(0)</span>
        </p>
        <p class="good">
          好评
          <span class="iconfont icon-arrow-right"></span>
        </p>
      </div>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="1"
      :quota="5"
      :quota-used="1"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="numberChange"
    >
    <div class="van-sku-row__item">XL</div>
     <div class="van-sku-row__item">L</div>
    </van-sku>
    <div class="footer">
      <div class="kefu">
        <span class="iconfont icon-kefu"></span>
        <p>客服</p>
      </div>
      <div class="cart">
        <span class="iconfont icon-gouwuche1"></span>
        <p>购物车</p>
      </div>
      <div class="add" @click="change">加入购物车</div>
      <div class="buy" @click="change">立即购买</div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getGoodsDetail, addCartList } from "@/api/api";
import { setTimeout } from "timers";
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
      },
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 9500, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1215", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "this.sku.price", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        //collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {},
      messageConfig: {},
      token: localStorage.getItem("token"),
      resArr: "",
      list: [],
      number: 1
    };
  },

  components: {
    swiper,
    swiperSlide
  },

  computed: {},

  created() {
    this.productId = this.$route.query.id
  },

  mounted() {
    this.getGoodsDetail();
  },

  methods: {
    onClickLeft() {
      this.$router.push('/cartList')
    },
    getGoodsDetail() {
      getGoodsDetail(this.productId).then(res => {
        if (res.status === "0") {
          let datas = res.result;
          this.goodsDetail = datas;
          this.sku.tree[0].v[0].imgUrl = datas.imgArr[0]
          this.sku.tree[0].v[0].previewImgUrl = datas.imgArr[0]
          this.sku.tree[0].v[1].imgUrl = datas.imgArr[0]
          this.sku.tree[0].v[1].previewImgUrl = datas.imgArr[0]
          this.sku.price = datas.currentPrice
          this.$forceUpdate()
          console.log(this.sku)
        } else {
          console.log(res.msg);
        }
      });
    },
    addCartList() {
      addCartList(this.token,this.productId,this.number,'standard').then(res => {
        if (res.status === "0") {
          console.log(res)
        }
      });
    },
    onBuyClicked() {
      this.addCartList()
      this.$router.push('/cartList')
    },
    onAddCartClicked() {
      this.addCartList()
    },
    change() {
      this.show = true;
    },
    numberChange(v) {
      this.number = v;
      console.log(this.number);
    }
  }
};
</script>
<style lang='scss' scoped>
.goodsDetail {
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
.choose {
  width: 7.5rem;
  height: 1.2rem;

  .top {
    width: 7.5rem;
    height: 0.3rem;
    background: #f8f8f8;
  }
  .bottom {
    width: 7.5rem;
    height: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    justify-content: space-between;
    .size {
      color: #0b0b0b;
      font-size: 0.26rem;
      span {
        margin-left: 0.42rem;
      }
    }
    .icon-arrow-right {
      font-size: 0.3rem;
      color: #7a7a7a;
    }
  }
}
.appraise {
  width: 7.5rem;
  height: 1.2rem;
  .top {
    width: 7.5rem;
    height: 0.3rem;
    background: #f8f8f8;
  }
  .bottom {
    width: 7.5rem;
    height: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    justify-content: space-between;
    .size {
      font-size: 0.26rem;
      color: #3a3a3a;
      font-weight: 700;
      span {
        margin-left: 0.3rem;
      }
    }
    .good {
      font-size: 0.22rem;
      color: #f28451;
      .icon-arrow-right {
        font-size: 0.3rem;
        color: #7a7a7a;
        margin-left: 0.2rem;
      }
    }
  }
}
van-sku {
  .van-cell-group {
    display: none;

  }
}
.footer {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;

  .kefu,
  .cart {
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.14rem;
    p {
      margin-top: 0.12rem;
    }
  }
  .kefu {
    border-right: 1px solid #ededed;
  }
  .add,
  .buy {
    width: 2.75rem;
    height: 1rem;
    font-size: 0.28rem;
    color: #fcf3e2;
    text-align: center;
    line-height: 1rem;
  }
  .add {
    background: #f8ae67;
  }
  .buy {
    background: #e86423;
  }
}
</style>
