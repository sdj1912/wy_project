<template>
  <div id="GoodsList">
    <img src="../../assets/images/pic.jpg" alt @click="jump('global')">
    <img src="../../assets/images/pic2.jpg" alt @click="jump('baby')">
    <img src="../../assets/images/pic.jpg" alt>
    <img src="../../assets/images/pic2.jpg" alt>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    jump(url) {
      this.$router.push('/' + url)
    }
  }
};
</script>
<style lang='scss' scoped>
#GoodsList {
  width: 7.5rem;
  height: 4.53rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img {
    display: inline-block;
    width: 3.4rem;
    height: 2.07rem;
  }
}
</style>
