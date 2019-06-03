<template>
  <div class="category">
    <div class="category-header">
      <router-link to="/">
        <i></i>
        <h2>{{title}}</h2>
      </router-link>
    </div>
    <div class="category-list">
      <ul>
        <li v-for="item in categoryList" :key="item.id">
          <router-link to="BookDetail" @click.native="bookDetailId(item.id)">
            <div class="book-image">
              <img :src="item.images"/>
            </div>
            <div class="book-detail">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="author">
                <i></i>
                <span>{{item.author}}</span>
              </div>
              <div class="category_r">
                <span>{{item.type}}</span>
                <span>{{item.serialize}}</span>
                <span>{{item.wordcount}}万字</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      categoryList: []
    }
  },
  mounted () {
    console.log(this.type)
    this.getData()
  },
  methods: {
    getData () {
      axios.get(`/api/type?type=${this.type}`).then(res => {
        this.categoryList = res.data
        console.log(this.categoryList)
      }).catch(error => {
        console.log(error)
      })
    },
    bookDetailId (id) {
      this.$store.dispatch('chooseBook', id)
      console.log(id)
    }
  },
  computed: {
    type () {
      return this.$store.state.bookCategory
    },
    title () {
      switch (this.$store.state.bookCategory) {
        case 1:
          return '玄幻'
        case 2:
          return '修真'
        case 3:
          return '都市'
        case 4:
          return '历史'
        case 5:
          return '网游'
      }
    }
  }
}
</script>

<style lang="less">
  .category{
    background-color: #f6f7f9;
  }
  .category-header{
    height:50px;
    background-color: #fff;
    i{
      background: url("../assets/images/back.png");
      width:30px;
      height:30px;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    h2{
      margin:0 40px;
      font-size: 18px;
      line-height:50px;
      color:#ed424b;
    }
  }
  .category-list{
    margin-top: 15px;
    background-color: #fff;
    padding:15px;
    ul li{
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 14px;
      a{
        display: flex;
      }
      .book-image{
        width:80px;
        img{
          width: 100%;
        }
      }
      .book-detail{
        position: relative;
        flex: 1;
        padding: 0px;
        margin-left: 20px;
        h3{
          font-size: 18px;
          margin-bottom:10px;
        }
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 2;
          font-size: 14px;
          color: #969ba3;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .author{
          position: absolute;
          left: 0px;
          bottom: 5px;
          color: #969ba3;
          font-size: 13px;
          i{
            position: relative;
            bottom: -3px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url("../assets/images/man.png") no-repeat;
          }
        }
        .category_r{
          position: absolute;
          right: 0px;
          bottom: 5px;
          color: #969ba3;
          font-size: 10px;
          span{
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 0 2px;
          }
          span:nth-child(2){
            color: #ed424b;
          }
          span:nth-child(3){
            color: #4284ed;
          }
        }
      }
    }
  }
</style>
