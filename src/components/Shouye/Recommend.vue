<template>
  <div id="recommend">
    <div class="main">
      <header>
        <p class="line"></p>
        <h2>推荐商品</h2>
      </header>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item,index) in recommendList" :key="index" @click="jump(item.productId)">
          <p class="imgWrap">
            <img :src="item.imgUrl" alt>
          </p>
          <div class="product">
            <h3>{{item.productName}}</h3>
            <div class="price">
              <span class="current_price">￥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.currentPrice}}</span>
              <span class="original_price">￥&nbsp;&nbsp;&nbsp;{{item.originalPrice}}</span>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/api/api";
export default {
  data() {
    return {
      recommendList: [],
      list: [],
      loading: false,
      finished: false,
      count: 4,
      page: 1
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    getRecommendList() {
      getRecommend(this.count, this.page).then(res => {
        if (res.status === "0") {
          let datas = res.result.list;
          this.recommendList = this.recommendList.concat(datas);
          this.page++;
          if(datas.length < this.count) {
            this.loading = true;
            this.finished = true;
          }else {
            this.loading = false;
          }
        } else {
          console.log(res.msg);
        }
      });
    },
    onLoad() {
      this.getRecommendList();
    },
    jump(id){
      this.$router.push(`/detail?id=${id}`)
    }
  }
};
</script>
<style lang='scss' scoped>
#recommend {
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  .main {
    width: 7rem;
    display: flex;
    flex-direction: column;
    header {
      width: 7rem;
      height: 0.96rem;
      display: flex;
      align-items: center;
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
    .van-list {
      width: 7rem;
      border-bottom: 1px solid #cecece;
      .van-cell {
        width: 100%;
        height: 2.33rem;
        .van-cell__value--alone {
          color: #323233;
          text-align: left;
        }
        .van-cell__value {
          display: flex;
        }
        .imgWrap {
          width: 2.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
        .product {
          width: 4.5rem;
          height: 100%;
          margin-left: 0.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          float: left;
          h3 {
            color: #282828;
            font-size: 0.26rem;
          }
          .price {
            .current_price {
              font-size: 0.24rem;
              color: #c65654;
              font-weight: 700;
            }
            .original_price {
              font-size: 0.18rem;
              text-decoration: line-through;
              color: #c6c6c6;
              margin-left: 0.12rem;
            }
          }
        }
      }
    }
  }
}
</style>
