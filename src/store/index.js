/**
 * Created by guojingfeng on 2017/3/17.
 */
var storeConfig = {
  state: {
    audioDomElement: '', //  音频Dom对象
    phoneResolutionWidth: 0 //  手机分辨率宽度
  },
  actions: {

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
    }
  }
}
export default storeConfig
