<template>
  <div class="slider-component">
    <div class="slider">
      <input type="range" class="slider-input" :min="min" :max="songDuration" :step="step" v-model="value">
      <div class="slider-bg"></div>
      <div class="slider-button-container" :style="{'left': sliderButtonLeft + 'px'}">
        <div class="slider-button-loading background"></div>
        <div class="slider-button"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .slider {
    position: relative;
    width: 100%;
    height: 1rem;
  }
  .slider-input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .slider-bg {
    position: absolute;
    top: 0.4375rem;
    line-height: 0;
    width: 100%;
    height: 0.125rem;
    background-color: #d33a31;
    border-radius: 0.125rem;
  }
  .slider-button-container,
  .slider-button,
  .slider-button-loading
  {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 50%;
  }
  .slider-button {
    background-color: #fff;
  }
  .slider-button-loading {
    display: none;
    z-index: 9;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scale3d(0.8, 0.8, 1);
    -moz-transform: scale3d(0.8, 0.8, 1);
    -ms-transform: scale3d(0.8, 0.8, 1);
    -o-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
    background-image: url("../../../static/images/player/icon_loading.png");
  }
</style>
<script>
  export default{
    props: {
      min: {
        type: Number,
        default: 0
      },
      step: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        width: 0 //  当前组件宽度
      }
    },
    computed: {
      value: { //  slider滑块的当前值
        get () {
          return this.$store.state.songCurrentTime
        },
        set (newValue) {
          this.$store.commit('setSongCurrentTime', newValue)
        }
      },
      songDuration () {
        return Math.ceil(this.$store.state.songDuration)
      },
      sliderButtonLeft () {
        return this.value / this.songDuration * this.width
      }
    },
    mounted () {
      this.width = this.$el.offsetWidth
    }
  }
</script>
