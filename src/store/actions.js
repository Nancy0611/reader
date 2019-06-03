import * as types from './mutation-type'

export default {
  bookCategory ({commit}, num) {
    commit(types.BOOK_CATEGORY, num)
  },
  chooseBook ({commit}, id) {
    commit(types.CHOOSE_BOOK, id)
  }
}
