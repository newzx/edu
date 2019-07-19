<template>
  <div class="header-content">
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
      <div class="search_chooise" @click="layershow">
        <span class="now-zy" ref="nowzy">建筑设计</span><img src="@/assets/header/down.png" alt="">
      </div>
    </div>
    <div class="select-box" v-show="onoff">
      <div class="select-content">
        <img class="close-btn" @click="turnoff" src="@/assets/header/close-btn.png" alt="">
        <div class="major-box" v-for="(items, index) in resultList" :key="index">
           <p class="major-class">
              <img :src="items.icon" alt=""> {{items.bigspecialty}}
           </p>
           <p class="major-wrapper">
              <span v-for="(item, index) in items.data" :key="index" :data-zy="item.specialty_id" @click="changeSpecialty">{{item.specialty_name}}</span>
           </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Cookies from 'js-cookie'

const nameList = {}
export default{
  data() {
    return {
      onoff: false,
      specialty_name: '',
      resultList: []    
    }
  },
  created() {
    this.getSpecialty()
    this.getAllspecialty()
  },
  methods: {
    layershow() {
      this.onoff = !this.onoff
    },
    turnoff() {
      this.onoff = false
    },
    getSpecialty() {
      let specialty_id = Cookies.get('specialty_id')
      if (specialty_id) {
        this.$store.state.specialty_id = specialty_id
      } else {
        this.$store.state.specialty_id = 1
      }
    },
    changeSpecialty(e) {
      this.onoff = false
      this.$refs.nowzy.innerHTML = e.target.innerHTML
      let channel = e.target.getAttribute('data-zy');
      this.$store.dispatch('changeSpecialty', channel)
    },
    getAllspecialty() {
      axios.get('/api/openapi/lesson/getAllspecialty').then((res) => {
        if (res.status === 200) {
          this.resultList = res.data.result;
          console.log(this.resultList)
        }
      })
    }
  }
}
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
.select-box{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 45px;
  z-index: 999;
  color: #333;
}
.select-content{
  height: 100%;
  padding: 20px 15px 0;
  background:#ECECEC;
  position: relative;
}
.major-class{
  font-size: 14px;
  line-height: 40px;
}
.major-class img{
  width: 22px;
  vertical-align: middle;
  margin-right: 5px;
}
.major-wrapper span{
   display: inline-block;
    height: 26px;
    width: 20.5%;
    background: #ffffff;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    border: 1px solid #DFDFDF;
    border-radius: 18px;
    margin-right: 6px;
    margin-bottom: 10px;
}
.close-btn{
  width: 28px;
  height: 28px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
