<template>
  <div id="choose">
    <div class="top"></div>
    <div class="bottom">
     <p class="size">选择<span>可选规格</span></p>
      <span class="iconfont icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#choose {
  width:7.5rem;
  height:1.2rem;

  .top {
    width:7.5rem;
    height:.3rem;
    background: #f8f8f8;
  }
  .bottom {
    width:7.5rem;
    height:.9rem;
    display: flex;
    align-items: center;
    padding: 0 .3rem;
    justify-content: space-between;
    .size {
      color:#0b0b0b;
      font-size: .26rem;
      span {
        margin-left: .42rem;
      }
    }
    .icon-arrow-right {
      font-size: .3rem;
      color:#7a7a7a;
    }

  }
}
</style>


