<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/traning" exact>
      <span class="tab-link">训练营</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/goodke">
      <span class="tab-link">精品课</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/openke">
      <span class="tab-link">公开课</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped rel="stylesheet/stylus">
  .tab {
    width: 100%;
    height: 45px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-bottom: 1px solid #cfcfcf;
    padding-top: 8px;
    background: #fff;
    position: fixed;
    left: 0;
    top: 45px;
    z-index: 998;
}

.tab-item span {
    display: inline-block;
    font-size: 16px;
    line-height: 44px;
    color: #333;
}

.router-link-active .tab-link {
    color: #ee2e2e;
    border-bottom: 2px solid #ee2e2e;
}
</style>
