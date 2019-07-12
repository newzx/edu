<template>
  <div class="footer">
    <ul>
      <li>
        <a href="">
          <img src="@/common/img/index.png" alt="">
          主页
        </a>
      </li>
      <li :class="{'active':isNow}">
        <a href="javascript:void(0);">
          <img src="@/common/img/edu.png" alt="">
          课程
        </a>
      </li>
      <li>
        <a href="http://vip.zhulong.com">
          <img src="@/common/img/vip.png" alt="">
          VIP
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/common/img/bbs.png" alt="">
          社区
        </a>
      </li>
      <li>
        <a href="http://passport.zhulong.com/m_userindex.html">
          <img src="@/common/img/my.png" alt="">
          我的
        </a>
      </li>

    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isNow: true
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus">
  .footer{
    width: 100%;
    height: 50px;
    background: white;
    position: fixed;
    bottom: 0px;
    z-index: 1000;
    box-shadow: 0 0 4px 0 rgb(185,178,178);
  }
  .footer ul{
    display: block;
    width: 100%;
    height: 100%;
  }
  .footer ul li {
    float: left;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 12px;
    color: #333;
    padding-top: 8px;
  }
  .footer ul li img {
    margin: auto;
    display: block;
    width: 27.5%;
    height: auto;
    padding-bottom: 3px;
 }
.footer ul .active a{
  color: #ee2e2e;
}
</style>