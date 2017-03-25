<template>
  <div class="flex player-component">
    <div class="flex player-header">
      <div class="btn-back"></div>
      <div class="player-music-item">
        <h4 class="player-music-name text-ellipsis">{{ songMsg.name }}</h4>
        <p class="player-music-singer text-ellipsis">{{ songMsg.artists | transformArtistList }}</p>
      </div>
      <div class="player-share"></div>
    </div>
    <div class="flex player-diskette">
      <div class="player-diskette-pole"></div>
      <div class="player-diskette-bg"></div>
      <div class="flex player-diskette-rotate">
        <img class="player-diskette-album" src="http://p4.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg?param=130y130" />
      </div>
    </div>
    <div class="player-footer">
      <div class="player-timeline"></div>
      <div class="flex player-controllers">
        <div class="player-mode"></div>
        <div class="player-pre"></div>
        <div class="player-pause"></div>
        <div class="player-next"></div>
        <div class="player-playing-list"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .player-component {
    height: 100%;
    flex-direction: column;
    background: linear-gradient(0deg, #6e564f, #5b1f1c);
  }
  .player-header {
    padding: 0.4375rem 0.875rem 0 1.125rem;
    height: 2.8125rem;
    justify-content: space-between;
    align-items: center;
  }
  .btn-back {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.125rem;
    background-image: url("../../static/images/player/icon_back.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .player-music-item {
    flex-grow: 1;
  }
  .player-music-name {
    color: #fff;
    font-size: 18px;
    line-height: 1.5rem;
  }
  [data-dpr="2"] .player-music-name {
    font-size: 36px;
  }
  [data-dpr="3"] .player-music-name {
    font-size: 54px;
  }
  .player-music-singer {
    color: #a5928e;
    font-size: 12px;
    line-height: 0.875rem;
  }
  [data-dpr="2"] .player-music-singer {
    font-size: 24px;
  }
  [data-dpr="3"] .player-music-singer {
    font-size: 36px;
  }
  .player-share {
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("../../static/images/player/icon_share.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .player-diskette {
    position: relative;
    flex-grow: 1;
    justify-content: center;
    overflow: hidden;
  }
  .player-diskette-pole {
    position: absolute;
    top: -0.8125rem;
    left: 50%;
    z-index: 9;
    width: 5.25rem;
    height: 8.125rem;
    background-image: url("../../static/images/player/icon_diskette_pole.png");
    background-repeat: no-repeat;
    background-size: 100%;
    -webkit-transition: transform .5s;
    -moz-transition: transform .5s ;
    -ms-transition: transform .5s ;
    -o-transition: transform .5s ;
    transition: transform .5s ;
    transform-origin: 0.8125rem 0.8125rem;
    transform: rotate(5deg);
  }
  .player-diskette-bg,
  .player-diskette-rotate {
    position: absolute;
  }
  .player-diskette-bg {
    z-index: 1;
    top: 3.8125rem;
    width: 16.875rem;
    height: 16.875rem;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 50%;
  }
  .player-diskette-rotate {
    z-index: 5;
    top: 4.125rem;
    width: 16.375rem;
    height: 16.375rem;
    justify-content: center;
    align-items: center;
    background-image: url("../../static/images/player/icon_diskette.png");
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 50%;
  }
  .player-diskette-album {
    width: 11.0625rem;
    height: 11.0625rem;
    border-radius: 50%;
  }
  .player-footer {
    height: 6.75rem;
  }
  .player-controllers {
    margin-top: 1.25rem;
    padding: 0 1.125rem;
    justify-content: space-between;
    align-items: center;
  }
  .player-mode,
  .player-playing-list {
    width: 1.375rem;
    height: 1.375rem;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .player-mode {
    background-image: url('../../static/images/player/icon_loop_mode.png');
  }
  .player-playing-list {
    background-image: url('../../static/images/player/icon_playing_list.png');
  }
  .player-pre,
  .player-next {
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .player-pre {
    background-image: url('../../static/images/player/icon_pre.png');
  }
  .player-next {
    background-image: url('../../static/images/player/icon_next.png');
  }
  .player-pause {
    width: 2.875rem;
    height: 2.875rem;
    background-image: url('../../static/images/player/icon_pause.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
<script>
  export default{
    data () {
      return {
      }
    },
    computed: {
      songMsg () {
        return this.$store.state.songMsg
      }
    },
    methods: {
    },
    created () {
    },
    components: {
    }
  }
</script>
