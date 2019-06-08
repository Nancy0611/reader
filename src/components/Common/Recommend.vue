<template>
  <div class="recommend">
    <h2 class="title">{{title}}</h2>
    <div class="list">
      <ul class="list-ul">
        <li class="list-li" v-for="item in datalist" :key="item.id">
          <router-link :to="{path:'/BookDetail/'+item.id}" @click.native="bookDetailId(item.id)">
            <img :src="item.images">
            <p>{{item.name}}</p>
            <p>{{item.author}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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

<style lang="less">
  .recommend{
    padding:15px 0;
    margin-bottom: 15px;
    background-color: white;
    .title{
      margin-left: 15px;
      margin-bottom: 10px;
      border-left:2px solid #ed424b;
      text-indent: 5px;
      font-size: 16px;
      line-height: 16px;
    }
    .list{
      .list-ul{
        position: relative;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        text-indent: 7px;
        .list-li{
          display: inline-block;
          width:100px;
          margin-right: 8px;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
