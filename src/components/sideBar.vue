<template>
  <div class="sideBar">
    <div class="title">
      <h1>万物皆可"视"</h1>
      <img src="../assets/head.png" alt="照片">
    </div>
    <div class="info">
      <dl>
        <dt><i class="iconfont icon-bookmark"></i> Contact. 联系方式</dt>
        <dd><i class="iconfont icon-weixin"></i> 微信: JsonWang0102</dd>
        <dd><i class="iconfont icon-QQ"></i> 邮箱: <a href="mailto:1042348844@qq.com"
                                                    target="_blank">1042348844@qq.com</a>
        </dd>
        <dd><i class="iconfont icon-youxiang"></i> QQ: 1042348844</dd>
      </dl>
      <dl>
        <dt><i class="iconfont icon-bookmark"></i> Application. 应聘岗位</dt>
        <dd><i class="iconfont icon-shujukeshihua"></i> 数据可视化工程师</dd>
        <dd><i class="iconfont icon-WEBqianduan"></i> 前端工程师</dd>
      </dl>
      <dl>
        <dt><i class="iconfont icon-bookmark"></i> Base info. 基本信息</dt>
        <dd><i class="iconfont icon-gerenxinxi"></i> 王勇 / 男 / 26</dd>
        <dd><i class="iconfont icon-xueli"></i> 硕士 / 西南科技大学</dd>
        <dd><i class="iconfont icon-xiaoyuan-"></i> 毕业时间：2020</dd>
        <dd><i class="iconfont icon-github"></i><a href="https://github.com/wangyongalive" target="_blank">https://github.com/wangyongalive</a>
        </dd>
      </dl>
      <dl>
        <dt><i class="iconfont icon-bookmark"></i> Expectation. 期望</dt>
        <dd>爱前端，更爱可视化.希望公司能给我一次提升我能力的实习机会</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="less">
  .sideBar {
    /*title 开始*/

    h1 {
      text-align: center;
      font-size: 28px;
      font-weight: 400;
    }

    img {
      width: 150px;
      border-radius: 50%;
      margin: 5px auto;
      display: block;
    }

    /*title 结束*/

    /*info 开始*/

    .info {
      margin-left: 5px;
      font-size: 14px;

      dt {
        color: #9f3;
        margin-bottom: 5px; /*标题距离内容的距离*/
      }


      a {
        color: #fff;
        text-decoration: none;
      }
    }

    /*info 结束*/
  }

</style>
