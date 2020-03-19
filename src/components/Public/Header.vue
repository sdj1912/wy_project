<template>
  <div id="header">
    <van-nav-bar :title="title"/>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.van-nav-bar__title {
  max-width: 100%;
}
</style>
