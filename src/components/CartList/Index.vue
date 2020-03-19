<template>
  <div>
    <Header :title="title"></Header>
    <GoodsPic v-if="!cartlist.length"></GoodsPic>
    <GoodsInfo v-else :get="cartlist"></GoodsInfo>
  </div>
</template>

<script>
import Header from "@/components/Public/Header";
import GoodsPic from "@/components/CartList/GoodsPic";
import GoodsInfo from "@/components/CartList/GoodsInfo";
import { getCartList } from "@/api/api";
export default {
  data() {
    return {
      cartlist: [],
      token: localStorage.getItem("token"),
      resArr: ""
    };
  },

  components: {
    Header,
    GoodsPic,
    GoodsInfo
  },

  computed: {
    title() {
      return `购物车(${this.cartlist.length})`;
    }
  },

  mounted() {
    if (this.token) {
      getCartList(this.token).then(res => {
        if (res.status === "0") {
          console.log(res)
          let data=res.result.resArr;
          this.cartlist = data;
        } else {
          console.log(res.msg);
        }
      });
    }
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>
