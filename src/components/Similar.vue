<template>
  <div class="similar" @click="toBookDetail(bookDetail.id)">
    <div class="similar-img">
      <img :src="bookDetail.images"/>
    </div>
    <p>{{bookDetail.name}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bookDetail: {}
    }
  },
  props: {
    like: {
      type: String,
      required: true
    }
  },
  created () {
    this.getBookDetail(this.like)
  },
  methods: {
    getBookDetail (id) {
      axios.get(`/api/booklist?id=${id}`).then((res) => {
        this.bookDetail = res.data
        console.log(this.bookDetail)
      })
    },
    toBookDetail (id) {
      this.$router.push({path: `/bookdetail/${id}`})
    }
  },
  watch: {
    like (val, old) {
      this.getBookDetail(val)
    }
  }
}
</script>
<style lang="less">
  .similar{
    width: 110px;
    height: 165px;
    .similar-img{
      height: 140px;
    }
    img{
      width: 100%;
      height: 100%;
      &[src=""]{
        opacity: 0;
      }
    }
  }
</style>
