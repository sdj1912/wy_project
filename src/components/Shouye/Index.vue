<template>
  <div>
    <Header title='首页'></Header>
    <Banner></Banner>
    <Tab></Tab>
    <GoodsList></GoodsList>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Header from '@/components/Public/Header'
import Banner from '@/components/Shouye/Banner'
import Tab from '@/components/Shouye/Tab'
import GoodsList from '@/components/Shouye/GoodsList'
import Recommend from '@/components/Shouye/Recommend'
export default {
  data () {
    return {
    }
  },

  components: {
    Header,
    Banner,
    Tab,
    GoodsList,
    Recommend
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
