<template>
  <div id="app">
    <router-view></router-view>
    <audio-controller></audio-controller>
  </div>
</template>

<script>
  import AudioController from './components/AudioController.vue'
  export default {
    name: 'app',
    created () {
      //  获取当前设备像素比
      var dpr = window.devicePixelRatio || 1
      //  获取当前手机分辨率宽度
      this.$store.commit('setPhoneResolutionWidth', window.screen.width * dpr)
      //  动态获取手机的DPR设备像素比，对总体字体大小进行设置
      var viewport = document.querySelector('meta[name="viewport"]')
      var html = document.getElementsByTagName('html')[0]
      var body = document.getElementsByTagName('body')[0]
      //  设置比例
      html.style.fontSize = 16 * dpr + 'px'
      html.dataset.dpr = dpr
      body.style.fontSize = 12 * dpr + 'px'
      viewport.content = 'initial-scale=' + 1 / dpr + ', maximum-scale=' + 1 / dpr + ', minimum-scale=' + 1 / dpr + ', user-scalable=no'
    },
    components: {
      AudioController
    }
  }
</script>

<style>
  @import "~normalize.css/normalize.css";
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
  body {
    background-color: #f2f4f5;
    font-size: 12px;
    color: #303131;
  }
  html, body, #app {
    height: 100%;
  }
  /*  重置样式  */
  ul, h4, p {
    margin: 0;
    padding: 0;
  }
  /*  主色调  */
  .primary-color {
    color: #d33a31;
  }
  .primary-bg-color {
    background-color: #d33a31;
  }
  /*  常用样式  */
  .flex {
    display: flex;
  }
  .align-center {
    text-align: center;
  }
  .text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .background {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
  }
</style>
