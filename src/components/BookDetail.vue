<template>
  <div class="book-detail">
    <div class="detail-linear">
      <header class="detail-top">
        <a @click="back">
          <i></i>
          <h2 class="detail-title">{{bookDetail.name}}</h2>
        </a>
      </header>
      <div class="detail-con">
        <div class="detail-img">
          <img :src="bookDetail.images"/>
        </div>
        <div class="detail-main">
          <h3>{{bookDetail.name}}</h3>
          <p>作者：{{bookDetail.author}}</p>
          <p>分类：{{bookDetail.type}}</p>
          <p>{{bookDetail.wordcount}}万字</p>
          <rate :score="bookDetail.ratings"></rate>
        </div>
      </div>
      <div class="read-btn">
        <div>
          <button>
            <router-link :to="{path:'/reader/'+bookDetail.id}">开始阅读</router-link>
          </button>
        </div>
        <div>
          <button>收藏本书</button>
        </div>
      </div>
    </div>
    <div class="detail-intro">
      <p>{{bookDetail.intro}}</p>
    </div>
    <div class="detail-tag">
      <h3>类别标签</h3>
      <ul>
        <li>{{bookDetail.type}}</li>
        <li>东方玄幻</li>
      </ul>
    </div>
    <div class="detail-like">
      <h3>喜欢本书的人也喜欢</h3>
      <ul>
        <li v-for="item in likes" :key="item.index">
          <similar :like="item"></similar>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Rate from './rate/rate.vue'
import Similar from './Similar.vue'
export default {
  data () {
    return {
      bookDetail: {},
      likes: []
    }
  },
  components: {
    Rate,
    Similar
  },
  created () {
    this.getBookDetail(this.$route.params.id)
  },
  methods: {
    back () {},
    getBookDetail (id) {
      axios.get(`/api/booklist?id=${id}`).then((res) => {
        console.log(res.data)
        this.bookDetail = res.data
        this.likes = res.data.like.split('-')
        console.log(this.likes)
      })
    }
  },
  watch: {
    $route (to, from) {
      this.getBookDetail(to.params.id)
    }
  }
}
</script>
<style lang="less">
  .book-detail{
    padding: 0 20px;
  }
  .detail-linear{
    .detail-top{
      position: fixed;
      left:0;
      right: 0;
      top: 0;
      height: 50px;
      background-color: #eee;
      display: flex;
      a:first-of-type{
        flex:1;
      }
      i{
        display: inline-block;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        background: url("../assets/images/back.png");
      }
      h2{
        margin: 0 40px;
        font-size: 18px;
        line-height: 50px;
        color: #ed424b;
      }
    }
    .detail-con{
      margin-top: 50px;
      display: flex;
      padding: 15px 0 18px;
      .detail-img{
        width: 100px;
        margin-right: 25px;
        img{
          width: 100%;
        }
      }
      .detail-main{
        flex: 1;
        h3{
          font-size: 18px;
          line-height: 1.5;
        }
        p{
          font-size: 14px;
          line-height: 1.8;
        }
      }
    }
    .read-btn{
      display: flex;
      >div{
        flex: 1;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
        &:first-child{
          margin-right: 15px;
        }
        button{
          display: block;
          margin:0 auto;
          width: 100%;
          height: 33px;
          line-height: 33px;
          font-size: 15px;
          vertical-align: middle;
          border: none;
          border-radius: 3px;
        }
        &:first-of-type{
          button{
            background-color: #ed424b;
            a{
              color: #fff;
            }
          }
        }
        &:nth-child(2){
          button{
            background-color: #fff;
            border: 1px solid #ddd;
          }
        }
      }
    }
  }
  .detail-intro{
    padding: 20px 0;
    font-size: 16px;
    text-indent: 2em;
    line-height: 1.6;
    border-bottom: 1px solid #ddd;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: 5;
      -webkit-line-clamp: 5;
      -webikt-box-orident: vertical;
    }
  }
  .detail-tag{
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    h3{
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul{
      display: flex;
      li{
        padding: 3px 10px;
        margin-right: 10px;
        border:1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
  .detail-like{
    padding: 20px 0;
    h3{
      font-size: 16px;
      margin-bottom: 20px;
    }
    ul{
      display: flex;
      li{
        flex: 1;
      }
    }
  }
</style>
