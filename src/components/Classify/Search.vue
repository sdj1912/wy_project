<template>
  <div id="search">
    <span class="iconfont icon-fangdajing"></span>
    <form>
      <input type="text" placeholder="新春大促销">
    </form>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
#search {
  width: 7.06rem;
  height: 0.61rem;
  background: #f8f8f8;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  .icon-fangdajing {
    margin-left: 0.24rem;
    color: #a1a1a1;
    font-size: 0.36rem;
  }
  form {
    margin-left: 0.25rem;

    input {
      border: 0;
      outline: none;
      background: #f8f8f8;
    }
    input::placeholder {
      font-size: 0.26rem;
      color: #838383;
    }
  }
}
</style>


