<template>
  <div class="mv-recommend-component">
    <div class="mv-recommend-detail" :style="{'width': componentWidth + 'px', 'height': componentHeight + 'px'}">
      <img class="mv-recommend-detail-cover" src="../../../static/images/index/mv_recommend.jpg">
      <div class="flex mv-recommend-detail-listen">
        <div class="mv-recommend-detail-listen-icon background"></div>
        <div class="mv-recommend-detail-listen-count">3425万</div>
      </div>
    </div>
    <div class="mv-recommend-message">
      <h4 class="mv-recommend-name">The Heroes</h4>
      <p class="mv-recommend-singer">许魏洲</p>
    </div>
  </div>
</template>
<style scoped>
  .mv-recommend-component {
    line-height: 1rem;
  }
  .mv-recommend-detail {
    position: relative;
  }
  .mv-recommend-detail-cover {
    width: 100%;
    height: 100%;
  }
  .mv-recommend-detail-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  .mv-recommend-detail-listen-icon {
    width: 0.75rem;
    height: 0.5rem;
    background-image: url('../../../static/images/index/y_.png');
  }
  .mv-recommend-detail-listen-count {
    padding-right: 0.3125rem;
    padding-left: 0.125rem;
    color: #fff;
  }
  .mv-recommend-detail-listen-count,
  .mv-recommend-singer
  {
    font-size: 10px;
  }
  [data-dpr="2"] .mv-recommend-detail-listen-count,
  [data-dpr="2"] .mv-recommend-singer
  {
    font-size: 20px;
  }
  [data-dpr="3"] .mv-recommend-detail-listen-count,
  [data-dpr="3"] .mv-recommend-singer
  {
    font-size: 30px;
  }
  .mv-recommend-name,
  .mv-recommend-singer
  {
    padding: 0 0.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mv-recommend-singer {
    color: #797a7b;
  }
</style>
<script>
  export default{
    data () {
      return {
        componentWidth: 0, //  当前组件宽度
        componentHeight: 0 //  当前组件高度
      }
    },
    computed: {
      phoneResolutionWidth () {
        return this.$store.state.phoneResolutionWidth
      }
    },
    created () {
      //  设置组件宽度 = （当前手机分辨率宽度 - 2px间距) / 2
      this.componentWidth = (this.phoneResolutionWidth - 2) / 2
      //  组件高度为宽度的0.567倍
      this.componentHeight = this.componentWidth * 0.567
    }
  }
</script>
