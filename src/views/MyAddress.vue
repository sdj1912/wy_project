<template>
  <div id="myAddress">
    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft"/>
    <van-address-list
    v-model="chosenAddressId"
    :list="list"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    />
  </div>
</template>

<script>
import { getAddress } from "@/api/api";
export default {
  data() {
    return {
      chosenAddressId: "1",
      token: localStorage.getItem("token"),
      resArr: '',
      list: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    if (this.token) {
      getAddress(this.token).then(res => {
        if (res.status === "0") {
          let data = res.result.resArr;
          let arr = [];
          for (let i = 0; i < data.length; i++) {
            let obj = {};
            obj.id = data[i].addressId;
            obj.name = data[i].getName;
            obj.tel = data[i].getPhone;
            obj.address = data[i].address;
            arr.push(obj)
          }
          this.list = arr;
        } else {
          console.log(res.msg);
        }

      });
    }
  },

  methods: {
    onClickLeft() {
      this.$router.push("/addAddress");
    },
    onAdd() {
      this.$router.push("/addAddress");
    },
    onEdit(item, index) {
      this.$store.commit('saveObj',item);
      this.$router.push('/addAddress')
    }
  }
};
</script>
<style lang='scss' scoped>
.van-nav-bar .van-icon {
  color: #272727;
  vertical-align: middle;
}
</style>
