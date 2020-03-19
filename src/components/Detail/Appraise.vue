<template>
  <div id="appraise">
    <div class="top"></div>
    <div class="bottom">
      <p class="size">
        商品评论
        <span>(0)</span>
      </p>
      <p class="good">
        好评
        <span class="iconfont icon-arrow-right"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#appraise {
  width: 7.5rem;
  height: 1.2rem;
  .top {
    width: 7.5rem;
    height: 0.3rem;
    background: #f8f8f8;
  }
  .bottom {
    width: 7.5rem;
    height: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    justify-content: space-between;
    .size {
      font-size: 0.26rem;
      color: #3a3a3a;
      font-weight: 700;
      span {
        margin-left: 0.3rem;
      }
    }
    .good {
      font-size: 0.22rem;
      color: #f28451;
      .icon-arrow-right {
        font-size: 0.3rem;
        color: #7a7a7a;
        margin-left: .2rem;
      }
    }
  }
}
</style>



