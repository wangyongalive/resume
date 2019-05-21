<template>
  <div class="resume">
    <dl>
      <dt><i class="iconfont icon-bookmark"></i>Experience. 项目经验</dt>
      <dd>
        <h4> 网络结构交互式可视分析系统 2017.11~2018.12</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <p>角色：主研</p>
        <p>
          技术栈：整个系统采用B/S架构，后台采用python+flask，网络特征参数计算中采用了networkx开发库，节点布局采用了igraph开发库，前端采用d3.js，包含五大模块：控制视图、主视图、统计视图、时间轴视图和表格视图。</p>
        <img src="../assets/系统界面.png">
      </dd>
      <dd>
        <h4> 网络安全可视化 2018.12~至今</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <p>角色：参研</p>
        <p>任务：利用webgl展示多层网络模型</p>
        <p>效果：能在较短时间能将模型绘制出来，且交互无卡顿</p>
        <img src="../assets/网络安全截图.png">
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
