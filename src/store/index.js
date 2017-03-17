/**
 * Created by guojingfeng on 2017/3/17.
 */
var storeConfig = {
  state: {
    audioDomElement: ''
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
    }
  }
}
export default storeConfig
