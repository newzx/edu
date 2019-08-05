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

export default {
  data() {
    return {
      specialty_id: this.$store.state.specialty_id,
      course_type: 2,
      url: '',
      dataList: [],
      page: 1,
      pullup: true,
      isLoading: false,
      loadEnd: false
    }
  },
  created() {
    this._dataUrl()
    this._requestData()
  },
  methods: {
    _dataUrl() {
      this.url = '/openapi/lesson/getLessonListForApi?limit=10&specialty_id=' + this.specialty_id + '&course_type=' + this.course_type + '&page='
    },
    scrollToEnd() {
      if (!this.loadEnd) {
        this.page++
        this._loadData(this.page)
      }
    },
    _loadData(page) {
      let url = this.url + page
      this.isLoading = true // 正在加载数据
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
      axios.get(url).then((res) => {
        let newlist = res.data.result.lists
        if (newlist.length < 10) {
          this.loadEnd = true // 当前页面全部数据加载完成
        }
        this.dataList = this.dataList.concat(newlist)
      })
    },
    _requestData() {
      axios.get(this.url + this.page).then((res) => {
        this.dataList = res.data.result.lists
      })
    }
  },
  computed: {
    change() {
      return this.$store.state.specialty_id // 需要监听的数据
    }
  },
  watch: {
    change(newVal, oldVal) {
      this.page = 1
      this.specialty_id = this.$store.state.specialty_id
      this._dataUrl() // state变化重新计算url并请求数据 刷新better-scroll
      this._requestData()
      this.$refs.scroll.refresh()
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style scoped  rel="stylesheet/stylus">
</style>
