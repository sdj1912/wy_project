<template>
  <div id="buy">
    <!-- <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '80%' }"
      :close-on-click-overlay="false"
      @click-overlay="close"
      :round="true"
    >
      <div class="popup_goods">
        <div class="popup_goods_img"></div>
        <div class="popup_goods_infos">
          <div class="popup_infos_vip">
            <span class="price">
              <small>￥</small>95.00
            </span>
          </div>
          <div class="popup_infos_normal"></div>
        </div>
      </div>
    </van-popup>-->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sku: {

      },
      goods: {

      },
      messageConfig: {

      }
    };
  },

  components: {},

  computed: {
    show() {
      return this.$store.state.detailShow;
    }
  },

  mounted() {},

  methods: {
    onBuyClicked(){
      this.$router.push('')
    },
    onAddCartClicked(){

    }
    // close() {
    //   this.$store.commit("close");
    // }
  }
};
</script>
<style lang='scss' scoped>
// .popup_goods {
//   width: 100%;
//   height: 2.3rem;
//   border-bottom: 2px solid #e0e0e0;
//   display: flex;
//   .popup_goods_img {
//     width: 2.08rem;
//     height: 2.28rem;
//     background: red;
//   }
//   .popup_goods_infos {
//     display: flex;
//     justify-content: center;
//     .popup_infos_vip {
//       display: flex;
//       width: 100%;
//       height: 0.71rem;
//       font-size: 0.24rem;
//       color: #be541c;
//     }
//     .popup_infos_normal {
//       height: 0.36rem;
//       justify-content: space-between;
//       font-size: 0.26rem;
//       color: #7c7c7c;
//     }
//   }
// }
</style>
