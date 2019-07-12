<template>
  <div class="header_li">
    <div class="logo_img">
      <a href="http://m.zhulong.com">
        <img src="@/assets/header/logo.png" alt="">
      </a>
    </div>
    <a href="http://m.s.zhulong.com/" class="search_a">
      <div class="search_box">
        <img src="@/assets/header/search.png" alt="">搜索
      </div>
    </a>
    <div class="search_chooise">
      建筑设计<img src="@/assets/header/down.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped rel="stylesheet/stylus">
.header_li{
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    width: 92%;
    padding: 0 4%;
    display: flex;
    z-index: 9999;
    justify-content: space-between;
    background: #2a292e;
}

.logo_img{
    margin-top: 10px;
}

.logo_img img{
    height: 25px
}

.search_a{
    width: 38%;
}
.search_box{
    height: 25px;
    margin-top: 10px;
    background: #3b3a3d;
    border-radius: 5px;
    line-height: 25px;
    color: #9b9a9c;
    font-size:15px;
    text-align: center;
}

.search_box img{
    height: 15px;
    margin-top: 5px;
    margin-right: 5px;
    vertical-align: top;
}

.search_chooise{
    line-height: 45px;
    font-size: 14px;
    color: #fff;
}

.search_chooise img{
    width: 13px;
    margin-left: 3px;
}

</style>
