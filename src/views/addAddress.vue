<template>
  <div id="addAddress">
    <van-nav-bar title="我的收货地址" left-arrow @click-left="onClickLeft"/>
    <ul class="address">
      <li class="addressLi">
        <p>姓名</p>
        <input type="text" placeholder="收货人姓名" v-model="getName">
        <span></span>
      </li>
      <li class="addressLi">
        <p>电话</p>
        <input type="text" placeholder="收货人手机号" v-model="getPhone">
        <span></span>
      </li>
      <li class="addressLi">
        <p>地区</p>
        <input type="text" placeholder="选择省/市/区">
        <span>></span>
      </li>
      <li class="addressLi">
        <p>详细地址</p>
        <input type="text" placeholder="街道门牌,楼层房间号等信息" style="margin-right:.55rem;" v-model="address">
        <span></span>
      </li>
      <li class="addressLi">
        <p>邮政编码</p>
        <input type="text" placeholder="邮政编码" style="margin-right:.53rem;">
        <span></span>
      </li>
    </ul>
    <div class="default">
      <p>设为默认收货地址</p>
      <van-switch v-model="status"/>
    </div>
    <button @click="save">保存</button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addAddress ,updateAddress} from "@/api/api";
export default {
  data() {
    return {
      searchResult: [],
      token: localStorage.getItem("token"),
      getName: '',
      getPhone: '',
      address: '',
      status: false,
      addressId: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
    if (this.$store.state.obj) {
      this.getName = this.$store.state.obj.name;
      this.getPhone = this.$store.state.obj.tel;
      this.address = this.$store.state.obj.address;
    }
  },

  methods: {
    onClickLeft() {
      this.$router.push("/myAddress");
    },
    save() {
      if (this.token) {
        addAddress(this.token,this.getName,this.getPhone,this.address,this.status).then(res => {
          if (res.status === "0") {
            console.log(res)
            this.$router.push("/myAddress");
          } else {
            console.log(res.msg);
          }
        });

        updateAddress(this.token,this.addressId,this.getName,this.getPhone,this.address,this.status).then(res => {
          if (res.status === "0") {
            console.log(res)
            this.$router.push("/myAddress");
          } else {
            console.log(res.msg);
          }
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
#addAddress {
  display: flex;
  flex-direction: column;
  .van-nav-bar .van-icon {
    color: #272727;
    vertical-align: middle;
  }
  .address {
    width: 7.5rem;
    padding: 0 0.36rem;
    display: flex;
    flex-direction: column;
    .addressLi {
      width: 6.5rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      font-size: 0.28rem;
    }
  }
  .default {
    width: 6.5rem;
    height: 1rem;
    margin-top: 0.3rem;
    margin-left: 0.36rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
    p {
      font-size: 0.28rem;
      line-height: 1rem;
    }
  }
  button {
    width: 6.5rem;
    height: 1rem;
    margin-top: 0.3rem;
    margin-left: 0.36rem;
    background: red;
    font-size: 0.28rem;
    line-height: 1rem;
    border-radius: 1rem;
    text-align: center;
  }
}
</style>
