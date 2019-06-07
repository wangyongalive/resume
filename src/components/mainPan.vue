<template>
  <div class="resume">
    <dl>
      <dt><i class="iconfont icon-bookmark"></i>Experience. 项目经验</dt>
      <dd>
        <h4> 网络结构交互式可视分析系统 2017.11~2018.12</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <div>
          <h5>角色</h5>
          <p>主研</p>
        </div>

        <div>
          <h5>项目背景：</h5>
          <p>该项目是北京大学委托开发的《网络综合态势展示和可视化分析技术研究》。</p>
        </div>
        <div>
          <h5> 技术栈：</h5>
          <p>
            整个系统采用B/S架构，后台采用python+flask，网络特征参数计算中采用了networkx开发库，节点布局采用了igraph开发库，前端采用d3.js，包含五大模块：控制视图、主视图、统计视图、时间轴视图和表格视图。</p>
        </div>
        <div>
          <img src="../assets/系统界面.png">
          <p style="margin: 0 auto;width: 210px;display: block">网络拓扑结构可视化系统截图</p>
        </div>
        <div id="containVideo">
          <button v-on:click="show">{{this.text}}</button>
          <!--<video src="../../static/媒体1.mp4"-->
                 <!--style="position:absolute;display: block;left: 30%;top:0"-->
                 <!--width="50%" height="50%" controls="controls" id="video">-->
            <!--Your browser does not support the video tag.-->
          <!--</video>-->
        </div>

      </dd>
      <dd>
        <h4> 网络安全可视化 2018.12~至今</h4>
        <h5>西南科技大学虚拟现实与可视化实验室</h5>
        <div>
          <h5> 角色：</h5>
          <p> 参研</p>
        </div>

        <div>
          <h5>项目背景：</h5>
          <p>北大、上海交大、西科大共同合作</p>
        </div>

        <div>
          <h5 style="display: inline">任务：</h5>
          <p>利用webgl进行网络分层,分层后的网络能发现网络间的相互作用、缓解有限的可视化空间与数据过载之间的矛盾。
          </p>
        </div>

        <img src="../assets/网络安全截图.png">
        <p style="margin: 0 auto;width: 210px;font-size:14px">网络安全可视化系统截图</p>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        flag: true,
        text: '项目演示'
      }
    },
    methods: {
      show() {
        this.flag == true ? this.create() : document.getElementById('video').remove();
        this.flag !== true ? this.text = "项目演示" : this.text = "关闭演示";
        this.flag = !this.flag;
      },
      create() {

        let width = document.body.clientWidth;
        let video = document.createElement('video');
        video.id = 'video';
        // video.src = "../../static/媒体1.mp4";
        video.src = "https://github.com/wangyongalive/resume/blob/master/static/aaa.mp4";
        video.style = "position:absolute;left: 30%;top:0;display:block";
        video.width = width / 2;
        video.height = '400';
        video.controls = "controls";
        document.getElementById('containVideo').appendChild(video);
      }
    }
  }
</script>


<style scoped lang="less">
  @import "mainPan";
</style>
