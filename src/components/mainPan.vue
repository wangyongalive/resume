<template>
  <div class="resume">
    <dl>
      <dt><i class="iconfont icon-bookmark"></i>Experience. 项目经验</dt>
      <dd>
        <h4> 网络结构交互式可视分析系统 2017.11~2018.12</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <p><h5 style="display: inline">角色</h5> 主研</p>
        <p>
        <h5 style="display: inline">项目背景：</h5>
        该项目是北京大学委托开发的《网络综合态势展示和可视化分析技术研究》。
        </p>
        <p>
        <h5 style="display: inline"> 技术栈：</h5>
        整个系统采用B/S架构，后台采用python+flask，网络特征参数计算中采用了networkx开发库，节点布局采用了igraph开发库，前端采用d3.js，包含五大模块：控制视图、主视图、统计视图、时间轴视图和表格视图。</p>
        <img src="../assets/系统界面.png">
        <p style="margin: 0 auto;width: 210px">网络拓扑结构可视化系统截图</p>
      </dd>
      <dd>
        <h4> 网络安全可视化 2018.12~至今</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <p>
        <h5 style="display: inline"> 角色：</h5>
          参研
        </p>
        <p>
        <h5 style="display: inline">项目背景：</h5>
        北大、上海交大、西科大共同合作
        </p>
        <p>
        <h5 style="display: inline">任务：</h5>
          利用webgl进行多层网络布局
        </p>
        <img src="../assets/网络安全截图.png">
        <p style="margin: 0 auto;width: 210px">网络安全可视化系统截图</p>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>


<style scoped lang="less">
  @import "mainPan";
</style>
