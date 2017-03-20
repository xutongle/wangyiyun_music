<template>
  <div class="song-list-component" :style="{'width': componentWidth + 'px'}">
    <div class="song-list-detail" :style="{'width': componentWidth + 'px', 'height': componentHeight + 'px'}">
      <img class="song-list-detail-cover" src="../../../static/images/index/song_list.jpg">
      <div class="flex song-list-detail-listen">
        <div class="song-list-detail-listen-icon"></div>
        <div class="song-list-detail-listen-count">3425万</div>
      </div>
    </div>
    <div class="song-list-name">华语Bossa Nova //你慵懒的像一只猫</div>
  </div>
</template>
<style scoped>
  .song-list-component {
    line-height: 1rem;
  }
  .song-list-detail {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .song-list-detail-cover {
    width: 100%;
    height: 100%;
  }
  .song-list-detail-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  .song-list-detail-listen-icon {
    width: 0.625rem;
    height: 0.625rem;
    background-image: url('../../../static/images/index/vn.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .song-list-detail-listen-count {
    padding-right: 0.3125rem;
    padding-left: 0.125rem;
    font-size: 10px;
    color: #fff;
  }
  [data-dpr="2"] .song-list-detail-listen-count {
    font-size: 20px;
  }
  [data-dpr="3"] .song-list-detail-listen-count {
    font-size: 30px;
  }
  .song-list-name {
    margin-top: .375rem;
    margin-bottom: 1.125rem;
    padding-right: 0.75rem;
    padding-left: 0.375rem;
    height: 2rem;
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
      //  设置组件宽度 = （当前手机分辨率宽度 - （2px间距）* 2) / 3
      this.componentWidth = (this.phoneResolutionWidth - 2 * 2) / 3
      //  组件高度和宽度比为1:1
      this.componentHeight = this.componentWidth
    }
  }
</script>
