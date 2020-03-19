<template>
  <div id="index">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Public/Footer'
export default {
  name: 'Index',
  data () {
    return {
    }
  },

  components: {
    Footer
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
