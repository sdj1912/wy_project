<template>
  <div id="main">
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="推荐分类"/>
      <van-sidebar-item title="全球奶粉"/>
      <van-sidebar-item title="尿不湿"/>
      <van-sidebar-item title="营养辅食"/>
      <van-sidebar-item title="喂养用品"/>
      <van-sidebar-item title="推荐分类"/>
      <van-sidebar-item title="宝宝洗护"/>
      <van-sidebar-item title="清洁用品"/>
      <van-sidebar-item title="孕产母乳"/>
      <van-sidebar-item title="婴幼儿服饰"/>
      <van-sidebar-item title="宝宝出行"/>
    </van-sidebar>
    <nav class="content">
      <li v-for="(item,index) in recommendData" :key="index">
        <img :src="item.imgUrl" alt>
        <p>{{item.title}}</p>
      </li>
    </nav>
  </div>
</template>

<script>
import { getRecommendClassify } from "@/api/api";
export default {
  data() {
    return {
      recommendData: [],
      num: 1,
      activeKey: 0
    };
  },
  mounted() {
    this.getRecommendData();
  },
  methods: {
    getRecommendData() {
      getRecommendClassify(this.num).then(res => {
        if (res.status === "0") {
          let datas = res.result;
          this.recommendData = datas;
        } else {
          console.log(res.msg);
        }
      });
    },
    onChange(index) {
      console.log(index)
      this.num = index + 1
      this.getRecommendData()
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 7.5rem;
  display: flex;
  .van-sidebar {
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .van-sidebar-item {
      width: 2rem;
      height: 1.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    // .van-sidebar-item--select {
    //   position: absolute;
    //   left: 0;
    //   top: 30%;
    //   display: inline-block;
    //   width: 0.1rem;
    //   height: 0.47rem;
    //   border-color: #f3843d;
    //   .van-sidebar-item__text {
    //     font-size: 0.26rem;
    //     color: #6a6a6a;
    //   }
    // }
  }
  .content {
    width: 5.5rem;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    li {
      width: 1.83rem;
      height: 2.64rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 1.4rem;
        height: 1.4rem;
      }
      p {
        text-align: center;
        width: 100%;
        margin-top: 0.15rem;
        color: #2f2f2f;
        font-size: 0.24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>


