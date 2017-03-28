<template>
  <div class="playlist-component">
    <transition name="fade">
      <div v-if="componentMounted" @click="close" class="mask"></div>
    </transition>
    <transition name="up">
      <div v-if="componentMounted" class="playlist">
        <div class="flex playlist-header">
          <div class="flex playlist-header-left">
            <div class="flex play-mode">
              <div class="play-mode-icon background"></div>
              <div class="play-mode-name">列表循环</div>
            </div>
            <div class="playlist-length">(188)</div>
          </div>
          <div class="flex playlist-header-right">
            <div class="playlist-trash-icon background"></div>
            <div @click="resetPlaylist" class="playlist-trash-name">清空</div>
          </div>
        </div>
        <ul class="playlist-list">
          <template v-for="(item, index) in playlist.list">
            <li class="flex playlist-item playlist-item-first">
              <div v-if="item.id === songMsg.id" class="playing-icon background"></div>
              <div @click="playThis(item, index)" class="playlist-item-msg text-ellipsis">
                <span class="playlist-item-msg-name">{{ item.name }}</span>
                <span class="playlist-item-msg-singers"> - {{ item.artists | transformArtistList }}</span>
              </div>
              <div @click="removeThis(item, index)" class="playlist-icon-remove background"></div>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>
<style scoped>
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .playlist {
    position: fixed;
    width: 100%;
    height: 384px;
    bottom: 0;
    left: 0;
    z-index: 99;
    font-size: 14px;
    line-height: 1rem;
    color: #333;
    background-color: #fff;
  }
  [data-dpr="2"] .playlist {
    font-size: 28px;
  }
  [data-dpr="3"] .playlist {
    font-size: 42px;
  }
  .up-enter-active, .up-leave-active {
    transition: all .3s;
  }
  .up-enter, .up-leave-active {
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
  }
  .playlist-header {
    padding: 0 0.625rem;
    height: 3.0625rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid #e6e6e6;
  }
  .play-mode {
    margin-right: 0.625rem;
  }
  .playlist-trash-icon,
  .play-mode-icon {
    margin-right: 0.375rem;
    width: 1rem;
    height: 1rem;
  }
  .play-mode-icon {
    background-image: url("../../static/images/player/icon_loop_mode.png");
  }
  .playlist-trash-icon {
    background-image: url("../../static/images/icon_trash.png");
  }
  .playlist-list {
    padding-left: 0.625rem;
    height: 20.875rem; /*  334px  */
    overflow: scroll;
  }
  .playlist-item {
    height: 2.8125rem; /*  45px  */
    justify-content: space-between;
    align-items: center;
    border-top: 0.0625rem solid #f4f4f4;
    border-bottom: 0.0625rem solid #f1f1f1;
  }
  .playlist-item-first {
    border-top: none;
  }
  .playing-icon {
    flex-shrink: 0;
    margin-right: 0.4375rem; /*  7px  */
    width: 1.0625rem;
    height: 0.875rem;
    background-image: url("../../static/images/icon_loudspeaker_playing.png");
  }
  .playlist-icon-remove {
    flex-shrink: 0;
    margin-right: 0.625rem;
    width: 0.75rem;
    height: 0.75rem;
    background-image: url("../../static/images/icon_remove.png")
  }
  .playlist-item-msg {
    padding-right: 3.125rem;
    flex-grow: 1;
  }
  .playlist-item-msg-singers {
    color: #808080;
    font-size: 12px;
  }
  [data-dpr="2"] .playlist-item-msg-singers {
    font-size: 24px;
  }
  [data-dpr="3"] .playlist-item-msg-singers {
    font-size: 36px;
  }
</style>
<script>
  export default{
    props: {
      componentMounted: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      playlist () {
        return this.$store.state.playlist
      },
      songMsg () {
        return this.$store.state.songMsg
      }
    },
    methods: {
      close () { //  关闭显示
        this.$emit('close')
      },
      playThis (item, index) { //  播放当前项
        if (item.id === this.songMsg.id) { //  点击正在播放的歌曲进行跳转到播放界面
          this.$router.push({
            name: 'Player'
          })
          return
        }
        this.$store.dispatch('playFromPlaylist', index)
      },
      removeThis (item, index) { //  移除当前项
        if (item.id === this.songMsg.id) { //  删除正在播放的歌曲则进行下一首播放
          this.$store.dispatch('nextControl')
        }
        //  先播放下一首再删除
        this.$store.commit('removeItemFromPlaylist', index)
      },
      resetPlaylist () { //  清空播放列表
        this.$store.commit('resetPlaylist')
      }
    }
  }
</script>
