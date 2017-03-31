<template>
  <div class="footer-player-component">
    <div class="flex footer-player">
      <div @click="goToPlayer" class="footer-player-album-container">
        <img class="footer-player-album" :src="songMsg.album.picUrl">
      </div>
      <div @click="goToPlayer" class="footer-player-songmsg">
        <h4 class="footer-player-name text-ellipsis">{{ songMsg.name }}</h4>
        <div class="footer-player-singer-or-lyric text-ellipsis">{{ songMsg.artists | transformArtistList}}</div>
      </div>
      <!--  暂时使用的两个div，circle控件后期将完善,list图标替换  -->
      <div @click="playControl" class="footer-player-playstatus background" :class="{'footer-player-playstatus-false': !playStatus}"></div>
      <div @click="showPlaylist = true" class="footer-player-playlist background"></div>
    </div>
    <playlist :component-mounted="showPlaylist" v-if="playlist.list.length !== 0" @close="showPlaylist = false"></playlist>
  </div>
</template>
<style scoped>
  .footer-player
  {
    width: 100%;
    height: 3.0625rem;
  }
  .footer-player {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .footer-player-album-container {
    flex-shrink: 0;
    margin-left: 0.375rem;
    width: 2.25rem;
    height: 2.25rem;
  }
  .footer-player-album {
    width: 100%;
    height: 100%;
    border: none;
  }
  .footer-player-songmsg {
    flex-grow: 1;
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
    overflow: hidden;
  }
  .footer-player-name {
    font-size: 14px;
    color: #333;
    line-height: 1.25rem;
  }
  [data-dpr="2"] .footer-player-name {
    font-size: 28px;
  }
  [data-dpr="3"] .footer-player-name {
    font-size: 42px;
  }
  .footer-player-singer-or-lyric {
    color: #808080;
    line-height: 1rem;
  }
  .footer-player-playstatus {
    flex-shrink: 0;
    width: 1.6875rem;
    height: 1.6875rem;
    background-image: url("../../../static/images/icon_playing_process.png");
  }
  .footer-player-playstatus-false {
    background-image: url("../../../static/images/icon_play_all.png");
  }
  .footer-player-playlist {
    flex-shrink: 0;
    margin-right: 0.75rem;
    margin-left: 1.25rem;
    width: 1.25rem;
    height: 1.0625rem;
    background-image: url("../../../static/images/icon_playing_list.png");
  }
</style>
<script>
  import Playlist from '../Playlist.vue'
  export default{
    data () {
      return {
        showPlaylist: false
      }
    },
    computed: {
      playlist () {
        return this.$store.state.playlist
      },
      songMsg () {
        return this.$store.state.songMsg
      },
      playStatus () {
        return this.$store.state.playStatus
      }
    },
    methods: {
      goToPlayer () { //  跳转到播放界面
        this.$router.push({name: 'Player'})
      },
      playControl () { //  按钮的播放控制
        if (this.playStatus) {
          this.$store.commit('pauseControl')
        } else {
          this.$store.commit('playControl')
        }
      }
    },
    components: {
      Playlist
    }
  }
</script>
