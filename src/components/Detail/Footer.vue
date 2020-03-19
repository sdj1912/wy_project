<template>
  <div id="footer">
    <div class="kefu">
      <span class="iconfont icon-kefu"></span>
      <p>客服</p>
    </div>
    <div class="cart">
      <span class="iconfont icon-gouwuche1"></span>
      <p>购物车</p>
    </div>
    <div class="add" @click="popup">加入购物车</div>
    <div class="buy" @click="popup">立即购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    popup(){
      this.$store.commit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  width:7.5rem;
  height:1rem;
  display: flex;
  position: fixed;
  left:0;
  bottom:0;
  background: #fff;

  .kefu,.cart {
    width:1rem;
    height:1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .14rem;
    p {
      margin-top: .12rem;
    }

  }
  .kefu {
    border-right: 1px solid #ededed;
  }
  .add, .buy {
    width:2.75rem;
    height:1rem;
    font-size: .28rem;
    color:#fcf3e2;
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


