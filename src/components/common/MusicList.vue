<template>
  <div class="music-list-component">
    <div class="flex music-list-header">
      <div class="btn-back"></div>
      <h3 class="music-list-title">歌单</h3>
      <div class="music-list-search"></div>
    </div>
    <div class="flex music-list-message">
      <div class="music-list-message-cover-container">
        <img :src="songListInfo.coverImgUrl" class="music-list-cover">
        <div class="flex music-list-message-listen">
          <div class="music-list-message-listen-icon"></div>
          <div class="music-list-message-listen-count">{{ songListInfo.playCount }}</div>
        </div>
        <div class="music-list-message-info"></div>
      </div>
      <div class="music-list-message-detail">
        <div class="music-list-message-name">{{ songListInfo.name }}</div>
        <div class="flex music-list-message-creator-info">
          <div class="music-list-message-creator-avatar-container">
            <img :src="creator.avatarUrl" class="music-list-message-creator-avatar">
            <img src="../../../static/images/icon_identity.png" class="music-list-message-creator-identity">
          </div>
          <div class="music-list-message-creator-name">{{ creator.nickname }}</div>
        </div>
      </div>
    </div>
    <div class="flex music-list-operation">
      <div class="operation-collect">
        <div class="operation-collect-icon"></div>
        <div class="operation-collect-count">{{ songListInfo.subscribedCount }}</div>
      </div>
      <div class="operation-comment">
        <div class="operation-comment-icon"></div>
        <div class="operation-comment-count">{{ songListInfo.commentCount }}</div>
      </div>
      <div class="operation-share">
        <div class="operation-share-icon"></div>
        <div class="operation-share-count">{{ songListInfo.shareCount }}</div>
      </div>
      <div class="operation-download">
        <div class="operation-download-icon"></div>
        <div class="operation-download-string">下载</div>
      </div>
    </div>
    <div class="music-list-playlist">
      <div class="flex music-list-playlist-header">
        <div class="music-list-playlist-icon-title"></div>
        <h3 class="music-list-playlist-title">播放全部<span class="music-list-playlist-count">(共{{ songListInfo.trackCount }}首)</span></h3>
        <div class="music-list-playlist-icon-setting"></div>
      </div>
      <ul class="music-list">
        <template v-for="(track, index) in tracks">
          <li class="flex music-list-item" @click="playThis(track)" :key=track.id>
            <div class="music-list-item-index">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="flex music-item-container">
              <div class="music-item">
                <div class="flex music-detail">
                  <div class="music-name">{{ track.name }}</div>
                  <div v-if="track.mvid !== 0" class="icon-mv"></div>
                </div>
                <div class="music-singer">{{ ' - ' + track.album.name }}</div>
              </div>
              <div class="icon-ellipsis"></div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .music-list-component {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, #6e564f, #5b1f1c);
  }
  .music-list-header {
    padding: 0.4375rem 0.875rem 0 1.125rem;
    height: 2.8125rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
  .btn-back {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.125rem;
    background-image: url("../../../static/images/player/icon_back.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .music-list-title {
    flex-grow: 1;
    color: #fff;
    font-size: 16px;
    line-height: 1.125rem;
  }
  [data-dpr="2"] .music-list-title {
    font-size: 32px;
  }
  [data-dpr="3"] .music-list-title {
    font-size: 48px;
  }
  .music-list-search {
    width: 1.25rem;
    height: 1.25rem;
    background: url("../../../static/images/index/m5.png") no-repeat;
    background-size: 100% 100%;
  }
  .music-list-message {
    padding-right: 1.5625rem;
    padding-left: 1.4375rem;
    flex-shrink: 0;
  }
  .music-list-message-cover-container {
    position: relative;
    flex-shrink: 0;
    margin-right: 1.0625rem;
    width: 7.875rem;
    height: 7.875rem;
  }
  .music-list-cover {
    width: 100%;
    height: 100%;
  }
  .music-list-message-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  .music-list-message-listen-icon {
    width: 0.625rem;
    height: 0.625rem;
    background-image: url('../../../static/images/index/vn.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .music-list-message-listen-count {
    padding-right: 0.3125rem;
    padding-left: 0.125rem;
    font-size: 10px;
    color: #fff;
  }
  [data-dpr="2"] .music-list-message-listen-count {
    font-size: 20px;
  }
  [data-dpr="3"] .music-list-message-listen-count {
    font-size: 30px;
  }
  .music-list-message-info {
    position: absolute;
    right: 0.1875rem;
    bottom: 0.1875rem;
    width: 1.125rem;
    height: 1.125rem;
    background-image: url('../../../static/images/icon_info.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .music-list-message-name {
    margin-top: 0.5rem;
    margin-bottom: 1.4375rem;
    color: #fff;
    font-size: 16px;
    line-height: 1.1875rem;
  }
  [data-dpr="2"] .music-list-message-name {
    font-size: 32px;
  }
  [data-dpr="3"] .music-list-message-name {
    font-size: 48px;
  }
  /*  用户信息 */
  .music-list-message-creator-avatar-container {
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
  }
  .music-list-message-creator-avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 50%;
  }
  .music-list-message-creator-identity{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  .music-list-message-creator-name {
    margin-left: 0.3rem;
    color: #f2eeee;
    font-size: 14px;
    line-height: 1.75rem;
  }
  [data-dpr="2"] .music-list-message-creator-name {
    font-size: 28px;
  }
  [data-dpr="3"] .music-list-message-creator-name {
    font-size: 42px;
  }
  /*  收藏、评论、分享、是否已下载等信息  */
  .music-list-operation {
    justify-content: space-around;
    margin-top: 1.125rem;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
  }
  .operation-collect-icon,
  .operation-comment-icon,
  .operation-share-icon,
  .operation-download-icon
  {
    margin: 0 auto;
    width: 1.25rem;
    height: 1.25rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .operation-collect-icon {
    background-image: url("../../../static/images/icon_collection.png");
  }
  .operation-comment-icon {
    background-image: url("../../../static/images/icon_comment.png");
  }
  .operation-share-icon {
    background-image: url("../../../static/images/icon_share.png");
  }
  .operation-download-icon {
    background-image: url("../../../static/images/icon_download.png");
  }
  .operation-collect-count,
  .operation-comment-count,
  .operation-share-count,
  .operation-download-string
  {
    color: #fff;
    font-size: 10px;
    line-height: 1.25rem;
  }
  [data-dpr="2"] .operation-collect-count,
  [data-dpr="2"] .operation-comment-count,
  [data-dpr="2"] .operation-share-count,
  [data-dpr="2"] .operation-download-string
  {
    font-size: 20px;
  }
  [data-dpr="3"] .operation-collect-count,
  [data-dpr="3"] .operation-comment-count,
  [data-dpr="3"] .operation-share-count,
  [data-dpr="3"] .operation-download-string
  {
    font-size: 30px;
  }
  /*  列表头部  */
  .music-list-playlist {
    flex-grow: 1;
    background-color: #fff;
  }
  .music-list-playlist-header {
    padding: 0 0.9375rem;
    justify-content: space-between;
    align-items: center;
  }
  .music-list-playlist-icon-title,
  .music-list-playlist-icon-setting
  {
    width: 1.25rem;
    height: 1.25rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .music-list-playlist-icon-title
  {
    margin-right: 0.9375rem;
    background-image: url("../../../static/images/icon_play_all.png");
  }
  .music-list-playlist-icon-setting
  {
    background-image: url("../../../static/images/icon_setting.png");
  }
  .music-list-playlist-title {
    flex-grow: 1;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.25rem;
  }
  [data-dpr="2"] .music-list-playlist-title {
    font-size: 32px;
  }
  [data-dpr="3"] .music-list-playlist-title {
    font-size: 48px;
  }
  .music-list-playlist-count {
    font-size: 14px;
    color: #919293;
  }
  [data-dpr="2"] .music-list-playlist-count {
    font-size: 28px;
  }
  [data-dpr="3"] .music-list-playlist-count {
    font-size: 42px;
  }
  /*  列表  */
  .music-list {
    padding-left: 0.9375rem;
    border-top: 1px solid #e5e7e8;
  }
  .music-list-item {
    align-items: center;
    justify-content: space-between;
    /*border-bottom: 1px solid #e5e7e8;*/
  }
  .music-list-item-index {
    margin-right: 1.25rem;
    width: 1.125rem;
    height: 1.125rem;
    color: #919293;
    line-height: 1.125rem;
    text-align: center;
  }
  .music-item-container {
    padding: 0.5rem 0 0.375rem;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7e8;
  }
  .music-item {
    flex-grow: 1;
  }
  .music-detail {
    align-items: center;
  }
  .music-name {
    font-size: 14px;
    line-height: 1.5rem;
  }
  [data-dpr="2"] .music-name {
    font-size: 28px;
  }
  [data-dpr="3"] .music-name {
    font-size: 42px;
  }
  .icon-mv {
    margin-left: 0.3125rem;
    width: 1.958rem;
    height: 0.8333rem;
    background-image: url("../../../static/images/icon_mv.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .music-singer {
    color: #797a7b;
    line-height: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icon-ellipsis {
    margin-right: 1.0625rem;
    width: 0.8125rem;
    height: 0.8125rem;
    background-image: url("../../../static/images/icon_ellipsis.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
<script>
  export default{
    data () {
      return {
        songListInfo: {},
        creator: {},
        tracks: []
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
      loadData () {
        this.$http({url: 'music_data.php', params: {pid: this.$route.params.id}}).then(function (res) {
          if (res.data.code === 200) {
            this.songListInfo = res.data.result
            this.creator = res.data.result.creator
            this.tracks = res.data.result.tracks
          }
        })
      },
      playThis (songMsg) {
        //  如果正在播放当前音乐，那么点击变为跳转到播放界面
        if (this.songMsg.id === songMsg.id) {
          this.$router.push({
            name: 'Player'
          })
          return
        }
        //  设置播放的音频信息
        this.$store.dispatch('setSongMsg', {
          id: songMsg.id, //  歌曲id
          name: songMsg.name, // 歌曲名称
          artists: songMsg.artists, //  演唱歌手
          mp3Url: songMsg.mp3Url, // 播放链接
          mvid: songMsg.mvid //  mv链接ID，0为没有id
        })
        //  将该列表推送至正在播放列表,并进行避免重复推送校验
        if (this.playlist.type !== 'list' || (this.playlist.type === 'list' && this.playlist.id !== this.songListInfo.id)) {
          this.$store.commit('setPlaylist', {
            id: this.songListInfo.id,
            type: 'list',
            list: this.tracks
          })
        }
      }
    },
    created () {
      this.loadData()
    },
    components: {
    }
  }
</script>
