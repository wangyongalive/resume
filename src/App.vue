<template>
  <div id="app">
    <sideBar id="sideBar"/>
    <mainPan id="mainPan"/>
    <myvideo v-if="show"></myvideo>
  </div>
</template>

<script>
  import './assets/iconfont/iconfont.css'
  import mainPan from './components/mainPan'
  import sideBar from './components/sideBar'
  import myvideo from './components/video'

  export default {
    name: 'App',
    components: {
      mainPan,
      sideBar,
      myvideo
    },
    computed: {
      show() {
        // 值是否发生变化
        return this.$store.state.show;
      }
    }
  }
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #e0e0e0;
    overflow: hidden;
  }

  #app {
    height: 100%;
    box-sizing: border-box;
    margin: 0 200px;
    display: flex;
    padding-top: 3px;

    #sideBar {
      flex: 2;
      background-color: #00bfa5;
      color: #fff;
    }

    #mainPan {
      flex: 6;
      background-color: #f0f2f1;
    }
  }
</style>
