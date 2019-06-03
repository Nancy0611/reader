<template>
  <div class="book-list">
    <h2 class="title">{{title}}</h2>
    <ul>
      <li v-for="item in datalist" :key="item.id">
        <router-link to="BookDetail" @click.native="bookDetailId(item.id)">
          <div class="book-image">
            <img :src="item.images">
          </div>
          <div class="book-detail">
            <h3>{{item.name}}</h3>
            <p>{{item.intro}}</p>
            <div class="author">
              <i></i>
              <span>{{item.author}}</span>
            </div>
            <div class="category">
              <span>{{item.type}}</span>
              <span>{{item.serialize}}</span>
              <span>{{item.wordcount}}万字</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['datalist', 'title'],
  methods: {
    bookDetailId (id) {
      this.$store.dispatch('chooseBook', id)
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
  .book-list{
    background: white;
    margin-top:15px;
    padding: 15px;
    .title{
      font-size: 16px;
      line-height: 16px;
      margin-left: 0;
      margin-bottom: 10px;
      border-left:2px solid #ed424b;
      text-indent: 5px;
    }
    ul li{
      display: flex;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 14px;
      &:last-of-type{
        border-bottom: none;
      }
      a{
        display: flex;
      }
      .book-image{
        width: 80px;
        img{
          width: 100%;
        }
      }
      .book-detail{
        position: relative;
        flex:1;
        padding: 0;
        margin-left: 20px;
        h3{
          font-size: 18px;
          margin-bottom: 10px;
        }
        p{
          font-size: 14px;
          color:#969ba3;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp:2;
          -webkit-line-clamp:2;
          -webkit-box-orient: vertical;
        }
        .author{
          position: absolute;
          left:0;
          bottom: 5px;
          color: #969ba3;
          font-size: 13px;
          i{
            background: url("../../assets/images/man.png");
            display: inline-block;
            width: 16px;
            height: 16px;
            position: relative;
            bottom: -3px;
          }
        }
        .category{
          position:absolute;
          right: 0px;
          bottom: 5px;
          color: #969ba3;
          font-size: 10px;
          span{
            border:1px solid #ccc;
            border-radius: 2px;
            padding: 0 2px;
          }
          span:nth-child(2){
            color:#ed424b;
          }
          span:nth-child(3){
            color:#4284ed;
          }
        }
      }
    }
  }
</style>
