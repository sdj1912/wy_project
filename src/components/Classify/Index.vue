<template>
  <div>
    <Header title="分类"></Header>
    <Search></Search>
    <RecommendClassify></RecommendClassify>
  </div>
</template>

<script>
import Header from '@/components/Public/Header'
import Search from '@/components/Classify/Search'
import RecommendClassify from '@/components/Classify/RecommendClassify'
export default {
  data () {
    return {
      active: 'search'
    }
  },

  components: {
    Header,
    Search,
    RecommendClassify
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
#wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
