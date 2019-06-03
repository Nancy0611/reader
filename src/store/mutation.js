import * as types from './mutation-type'

export default {
  [types.BOOK_CATEGORY] (state, num) {
    state.bookCategory = num
  },
  [types.CHOOSE_BOOK] (state, id) {
    state.curBookDetailId = id
  }
}
