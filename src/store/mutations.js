export default {
  // mutations放置用来改变数据的方法.更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  change(state, flag) {
    state.show = flag;
  }
}
