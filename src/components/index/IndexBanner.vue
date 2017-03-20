<template>
  <div class="index-banner-component">
    <swipe class="my-swipe" :auto="auto">
      <swipe-item v-for="(src, index) in images" :key="index" class="slide">
        <img class="slide-img" :src="src">
      </swipe-item>
    </swipe>
  </div>
</template>
<style scoped>
  @import "~vue-swipe/dist/vue-swipe.css";
</style>
<style scoped>
  .my-swipe {
    width: 100%;
    height: 8.75rem;
  }
  .slide {
    width: 100%;
    height: 8.75rem;
  }
  .slide-img {
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .mint-swipe-indicator {
    background-color: #303131;
  }
  .mint-swipe-indicator.is-active {
    background-color: #d33a31;
  }
</style>
<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  export default{
    data () {
      return {
        auto: 5000,
        images: [
          '../../../static/images/index/banner1.jpg',
          '../../../static/images/index/banner2.jpg',
          '../../../static/images/index/banner3.jpg'
        ]
      }
    },
    components: {
      Swipe, SwipeItem
    }
  }
</script>
