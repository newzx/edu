<template>
  <div class="traning" ref="traning">
       <scroll ref="scroll" class="traning-content"
       :data="dataList"
       :loadEnd="loadEnd"
       :isLoading="isLoading"
       :pullup="pullup"
       @scrollToEnd="scrollToEnd">
         <div>
           <ul class="ke-list">
              <li class="ke-box" v-for="(item, index) in dataList" :key="index">
                <a :href="'http://edu.zhulong.com/lesson/' + item.lesson_id + '-1.html'">
                  <div class="ke-left">
                    <img class="ke-img" :src="item.thumb" alt="">
                  </div>
                  <div class="ke-right">
                    <p class="ke-name">{{item.lesson_name}}</p>
                    <p class="ke-detail">
                      <span class="ke-team" v-show="item.studentnum">
                        <img src="@/assets/ke/team.png" alt="">
                        {{item.studentnum}}人学习
                      </span>
                      <span v-show="item.rate" class="ke-praise">
                         <img src="@/assets/ke/haoping.png" alt="">
                          好评率{{item.rate}}
                      </span>
                    </p>
                    <p class="ke-price" v-show="item.price">￥{{item.price}}</p>
                  </div>
                </a>
              </li>
              <li class="tip-box" v-show="isLoading">
                  <loading></loading>
              </li>
              <li class="tip-box" v-show="loadEnd&&!isLoading">
                <div class="load-end">到底啦！</div>
              </li>
           </ul>
         </div>
       </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Scroll from '@/components/base/scroll'
import Loading from '@/components/base/loading'
var ERROK = 0

export default {
  data() {
    return {
      dataList: [],
      page: 1,
      pullup: true,
      isLoading: false,
      loadEnd: false
    }
  },
  created() {
    this._requestData()
  },
  methods: {
    scrollToEnd() {
      if (ERROK === 0) {
        this.page++
        this._loadData(this.page)
      }
    },
    _loadData(page) {
      let url = '/api/openapi/lesson/getLessonListForApi?specialty_id=1&page=' + page + '&limit=10&type=2'
      this.isLoading = true // 正在加载数据
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
      axios.get(url).then((res) => {
        ERROK = res.data.errNo
        let newlist = res.data.result.lists
        if (newlist.length < 10) {
          ERROK = 1
          this.loadEnd = true // 当前页面全部数据加载完成
        }
        this.dataList = this.dataList.concat(newlist)
      })
    },
    _requestData() {
      axios.get('/api/openapi/lesson/getLessonListForApi?specialty_id=1&page=1&limit=10&type=2').then((res) => {
        this.dataList = res.data.result.lists
        ERROK = res.data.errNo
      })
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style scoped  rel="stylesheet/stylus">
  .traning{
    position: fixed;
    width: 100%;
    top: 103px;
    bottom: 50px;
  }
  .traning-content{
    height: 100%;
    overflow: hidden;
    padding: 15px 0 10px;
  }
  .ke-list{
    display: block;
  }
  .ke-box{
    width: 92%;
    padding: 4% 0;
    margin: 0 4%;
    background: white;
    height: 75px;
    border-bottom: 1px solid #F0F0F0;
    display: block;
  }
  .ke-left{
    float: left;
    height: 100%;
    width: 36%;
    position: relative;
  }
  .ke-right{
    float: left;
    height: 100%;
    width: 62%;
    padding-left: 2%;
    position: relative;
  }
  .ke-img{
    display: block;
    width: 100%;
    height: 100%;
    float: left;
    min-width: 91px;
  }
  .ke-name{
    font-size: 16px;
    color: #333;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .ke-detail{
    font-size: 12px;
    color: #999999;
    width: 100%;
    overflow: hidden;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top:2px;
  }
  .ke-team {
    margin-right: 10px;
  }
  .ke-team img{
    width: 15px;
    position: relative;
    top: 1px;
  }
  .ke-praise img{
    width: 12px;
    position: relative;
    top: 1px;
  }
  .ke-price{
    color: #ee2e2f;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    line-height: 14px;
  }
  .tip-box{
    display: block;
    height: 20px;
    padding: 5px;
  }
  .loading-container{
    width: 100%;
    padding: 5px 0 20px;
  }
  .load-end{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    text-align: center
  }
</style>
