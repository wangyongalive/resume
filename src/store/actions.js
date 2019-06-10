export default {
  // 两个参数:上下文环境, 传参---使用ctx.commit( , )方法去调用mutations里面的方法名
  change(ctx, flag) {
    ctx.commit('change', flag)
  }
}
