<template>
  <div id="goodsInfo">
    <div class="goodsList">
      <p>编辑</p>
    </div>
    <div class="delivery">
      <button>√</button>
      <p class="platform">平台配送</p>
    </div>
    <div class="goods" v-for="(item,index) in lists" :key='index'>
      <button>√</button>
      <div class="imgWrap">
        <!-- <img src="../../assets/images/bangbaoshi.png" alt> -->
         <img :src="item.productImg" alt>
      </div>
      <div class="info">
        <!-- <p class="title">帮宝适一级帮环贴式纸尿裤-NB84片</p> -->
        <p class="title">{{item.productName}}</p>
        <!-- <div class="size">规格:NB84;</div> -->
        <div class="size">{{item.standard}}</div>
        <div class="price">
          <p>
            ￥
            <!-- <span>125.00</span> -->
            <span>{{item.productPrice}}</span>
          </p>
          <div class="anniu">
            <button class="reduce">－</button>
            <p class="num">3</p>
            <button class="add">＋</button>
          </div>
        </div>
      </div>
    </div>
    <div class="other">
      <header>
        <p class="line"></p>
        <h2>推荐商品</h2>
      </header>
      <div class="recommend">
        <img src="../../assets/images/goodsList.png" alt>
        <img src="../../assets/images/goodsList.png" alt>
        <img src="../../assets/images/goodsList.png" alt>
        <img src="../../assets/images/goodsList.png" alt>
      </div>
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
import {getCartList} from '../../api/api'
export default {
  props: ['get'],
  data() {
    return {
      lists:[],
      token: localStorage.getItem("token")
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getCartList()
  },

  methods: {
    getCartList() {
      getCartList(this.token).then((res) => {
        if (res.status == 0) {
          this.lists = res.result.resArr
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
#goodsInfo {
  .goodsList {
    width: 7.5rem;
    height: 0.7rem;
    border-top: 1px solid #d8d7dc;
    background: #f7f7f7;
    position: relative;
    p {
      position: absolute;
      top: 0.22rem;
      right: 0.3rem;
      color: #e76300;
      font-size: 0.26rem;
    }
  }
  .delivery {
    width: 7.5rem;
    height: 1.19rem;
    line-height: 1.19rem;
    display: flex;
    align-items: center;
    button {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.4rem;
      background: #ef8642;
      margin-left: 0.21rem;
      line-height: 0.4rem;
      text-align: center;
      color: #fff;
    }
    .platform {
      margin-left: 0.21rem;
      font-size: 0.36rem;
      color: #323232;
    }
  }
  .goods {
    height: 2.44rem;
    border-top: 1px solid #d8d7dc;
    display: flex;
    align-items: center;
    button {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.4rem;
      background: #ef8642;
      line-height: 0.4rem;
      text-align: center;
      color: #fff;
      margin-left: 0.21rem;
    }
    .imgWrap {
      width: 2.75rem;
      height: 2.44rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1.03rem;
        height: 1.15rem;
      }
    }
    .info {
      height: 2.44rem;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 0.24rem;
        color: #2f2f2f;
        margin-top: 0.4rem;
        font-weight: 700;
      }
      .size {
        font-size: 0.2rem;
        color: #898989;
        margin-top: 0.54rem;
      }
      .price {
        height: 0.96rem;
        display: flex;
        position: relative;
        p {
          margin-top: 0.32rem;
          font-size: 0.26rem;
          color: #ec5a5b;
          span {
            font-size: 0.32rem;
          }
        }
        .anniu {
          position: absolute;
          top: 0.14rem;
          right: 0.28rem;
          width: 1.77rem;
          height: 0.53rem;
          display: flex;
          justify-content: space-between;
          .reduce {
            background: #fff;
            width: 0.52rem;
            height: 0.52rem;
            color: #dfdfdf;
            color: #000;
            margin-left: 0;
          }
          .num {
            margin-top: 0.16rem;
            font-size: 0.22rem;
            margin-left: 0.24rem;
            color: #000;
          }
          .add {
            width: 0.52rem;
            height: 0.52rem;
          }
        }
      }
    }
  }
  .other {
    width: 7.5rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    header {
      width: 7.5rem;
      height: 1rem;
      display: flex;
      align-items: center;
      background: #f7f7f7;
      .line {
        width: 0.1rem;
        height: 0.36rem;
        background: #dc681f;
        margin-left: 0.24rem;
      }
      h2 {
        color: #2f2f2f;
        font-size: 0.26rem;
        margin-left: 0.17rem;
      }
    }
    .recommend {
      width: 7.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      img {
        width: 3.4rem;
        height: 4.59rem;
      }
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
