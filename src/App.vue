<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
