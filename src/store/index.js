import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)

const state = {
  bookCategory: 1,
  // bookCategoryType: '玄幻',
  curBookDetailId: 1
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
