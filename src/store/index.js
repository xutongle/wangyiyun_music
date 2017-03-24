/**
 * Created by guojingfeng on 2017/3/17.
 */
var storeConfig = {
  state: {
    audioDomElement: '', //  音频Dom对象
    phoneResolutionWidth: 0, //  手机分辨率宽度
    playlist: {
      id: 0, //  类型不为搜索的歌单ID
      type: 'list', //  当前播放列表来源类型 { list: 歌单列表, search: 搜索列表}
      list: []
    }, //  正在播放的列表
    /*
     songMsg：当前准备播放或者正在播放音乐的信息
     数据类型：
     id: 歌曲id
     name: 歌曲名称
     artists: 演唱歌手
     mp3Url: 播放链接
     mvid: mv链接ID，0为没有id
     */
    songMsg: {}
  },
  actions: {
    setSongMsg ({commit, state}, payload) { //  更改音频源时，进行播放操作
      //  设置正在播放音乐的信息
      state.songMsg = payload
      state.audioDomElement.src = payload.mp3Url
      commit('playControl')
    }
  },
  mutations: {
    setAudioDomElement (state) {
      state.audioDomElement = document.getElementById('audioElement')
    },
    playControl (state) { //  播放控制
      state.audioDomElement.play()
    },
    pauseControl (state) { //  暂停控制
      state.audioDomElement.pause()
    },
    setPhoneResolutionWidth (state) { //  获取手机分辨率宽度
      state.phoneResolutionWidth = window.screen.width * window.devicePixelRatio
    },
    setPlaylist (state, payload) { //  设置正在播放列表
      state.playlist = payload
    }
  }
}
export default storeConfig
