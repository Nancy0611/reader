<template>
  <div class="container">
    <nav class="nav-header">
      <header>
        <a href="/" class="brand">起点中文网</a>
        <a href="/" class="avatar"></a>
      </header>
      <div class="swipe">
        <mt-swipe :auto="3000">
          <mt-swipe-item><img src="../assets/images/1.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/2.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/3.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/4.jpg"/></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/5.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
    </nav>
    <nav class="home-nav">
      <router-link class="guide-nav-div" v-for="item in type" :key="item.num" :to="{path:'/category/'+item.num}" @click.native="openBookCategory(item.num)">
        <i></i>
        <h4>{{item.word}}</h4>
      </router-link>
    </nav>
    <recommend :datalist="booklist | hot" title="热门小说"></recommend>
    <recommend :datalist="booklist | top" title="排行榜"></recommend>
    <recommend :datalist="booklist | free" title="限时免费"></recommend>
    <book-list :datalist="booklist | newbook" title="新书抢鲜"></book-list>
    <book-list :datalist="booklist | endbook" title="畅销完本"></book-list>
    <book-list :datalist="booklist | like" title="猜你喜欢"></book-list>
  </div>
</template>

<script>
import MtSwipe from '../../node_modules/mint-ui/packages/swipe/src/swipe.vue'
import MtSwipeItem from '../../node_modules/mint-ui/packages/swipe/src/swipe-item.vue'
import axios from 'axios'
import BookList from './Common/BookList.vue'
import Recommend from './Common/Recommend.vue'

export default{
  components: {
    MtSwipeItem,
    MtSwipe,
    BookList,
    Recommend
  },
  data () {
    return {
      booklist: [],
      type: [
        {
          num: 1,
          word: '玄幻'
        },
        {
          num: 2,
          word: '仙侠'
        },
        {
          num: 3,
          word: '都市'
        },
        {
          num: 4,
          word: '历史'
        },
        {
          num: 5,
          word: '游戏'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get(`/api/booklist`).then(res => {
        this.booklist = res.data
        console.log(res)
      })
    },
    openBookCategory (num) {
      this.$store.dispatch('bookCategory', num)
      console.log(num)
    }
  },
  filters: {
    endbook (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (item.serialize === '完本') {
          arr.push(item)
        }
      })
      return arr
    },
    like (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (index % parseInt(Math.random() * 18 + 1) === 1) {
          arr.push(item)
        }
      })
      return arr.splice(0, 3)
    },
    hot (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (index % 2 === 1) {
          arr.push(item)
        }
      })
      return arr
    },
    top (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (index % 2 === 0) {
          arr.push(item)
        }
      })
      return arr
    },
    free (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (index % 3 === 2) {
          arr.push(item)
        }
      })
      return arr
    },
    newbook (value) {
      if (!value) return ''
      var arr = []
      value.forEach((item, index) => {
        if (index % parseInt(Math.random() * 19) === 0) {
          arr.push(item)
        }
      })
      return arr.splice(0, 3)
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    background-color: #f6f7f9;
  }
  .nav-header{
    header{
      display: flex;
      height: 45px;
      padding: 0 15px;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      text-indent: -8888px;
      .brand{
        width: 100px;
        background: url("http://qidian.gtimg.com/qdm/img/logo-qdm.0.50.svg") no-repeat left;
        background-size: 100%;
      }
      .avatar{
        width: 24px;
        height: 24px;
        background: url("../assets/images/avatar.png") no-repeat center;
        background-size: 100%;
      }
    }
  }
  .swipe{
    height: 170px;
    img{
      width: 100%;
    }
  }
  .home-nav{
    display: flex;
    background-color: white;
    margin: 10px 0;
    padding: 10px 0;
    .guide-nav-div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      > i{
        width:24px;
        height: 24px;
        background-image: url(../assets/images/sprite.0.50.png);
      }
      &:nth-of-type(1){
        i{
          background-position: -63px -28px;
        }
      }
      &:nth-of-type(2){
        i{
          background-position: 0 0;
        }
      }
      &:nth-of-type(3){
        i{
          background-position: 0 -30px;
        }
      }
      &:nth-of-type(4){
        i{
          background-position: 0 -60px;
        }
      }
      &:nth-of-type(5){
        i{
          background-position: -30px -30px;
        }
      }
    }
  }
</style>
