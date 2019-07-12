<template>
  <div class="loading">
    <img width="24" height="24" src="@/common/img/loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }
};
</script>

<style scoped rel="stylesheet/stylus">
  .loading{
    width: 100%;
    text-align: center;
  }
  .desc{
    line-height: 20px;
    font-size: 16px;
    color: #333;
  }
</style>