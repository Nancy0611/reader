import Vue from 'vue'
import Router from 'vue-router'
import BookDetail from '@/components/BookDetail'
import Reader from '@/components/Reader'
import Category from '@/components/Category'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: Home,
      component: Home
    },
    {
      path: '/category',
      name: Category,
      component: Category
    },
    {
      path: '/reader',
      name: Reader,
      component: Reader
    },
    {
      path: '/bookdetail',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
