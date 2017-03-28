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
     album: 专辑信息
     mp3Url: 播放链接
     mvid: mv链接ID，0为没有id
     */
    songMsg: {},
    songCurrentTime: 0, //  当前正在播放音频的播放时间
    songDuration: 0, //  当前正在播放音频的总时长
    songMsgIndex: 0, //  当前正在播放音频在正在播放列表中的索引位置,默认0
    playStatus: false, //  当前播放状态：true为正在播放，false为暂停或者未播放
    playMode: 'listCycle' //  播放模式，三种：listCycle（列表循环），listRandom（列表随机）,singleCycle(单曲循环)
  },
  actions: {
    preControl ({dispatch, state}) { //  上一首播放控制
      var listLength = state.playlist.list.length
      //  遵循播放模式进行控制
      if (state.playMode !== 'listRandom') { //  只要不是随机，就进行上一首音频信息切换
        if (state.songMsgIndex === 0) { //  当前为列表第一首的时候
          dispatch('setSongMsg', state.playlist.list[listLength - 1])
          state.songMsgIndex = listLength - 1
        } else {
          dispatch('setSongMsg', state.playlist.list[state.songMsgIndex - 1])
          state.songMsgIndex -= 1
        }
      } else { // 列表随机
        dispatch('randomMode')
      }
    },
    nextControl ({dispatch, state}) { //  下一首播放控制
      //  遵循播放模式进行控制
      if (state.playMode !== 'listRandom') { //  只要不是随机，就进行下一首音频信息切换
        if (state.songMsgIndex === state.playlist.list.length - 1) { //  当前为列表最后一首的时候
          dispatch('setSongMsg', state.playlist.list[0])
          state.songMsgIndex = 0
        } else {
          dispatch('setSongMsg', state.playlist.list[state.songMsgIndex + 1])
          state.songMsgIndex += 1
        }
      } else {  // 列表随机
        dispatch('randomMode')
      }
    },
    playFromPlaylist ({dispatch, state}, index) { //  从正在播放列表中选中播放
      dispatch('setSongMsg', state.playlist.list[index])
    },
    randomMode ({dispatch, state}) { //  随机播放模式音频信息设置
      var randomNumber = randomRange(0, state.playlist.list.length)
      if (randomNumber === state.songMsgIndex) { //  防止随机到当前正在播放的音频
        return dispatch('randomMode')
      }
      dispatch('setSongMsg', state.playlist.list[randomNumber])
      state.songMsgIndex = randomNumber
    },
    registerPlayEvent ({dispatch, commit, state}) { //  注册播放过程中的相关事件
      //  注册音乐结束后自动播放下一首事件
      state.audioDomElement.onended = function () {
        state.playStatus = false //  结束歌曲后重置播放状态
        if (state.playMode !== 'singleCycle') { //  不是单曲循环的都自动播放下一首
          dispatch('nextControl')
        } else { //  单曲循环模式，1.5秒后继续播放当前音频
          var timer = setTimeout(function () {
            commit('playControl')
            clearTimeout(timer)
          }, 1500)
        }
      }
      //  当加载完元数据时，获取当前媒体总时长
      state.audioDomElement.onloadedmetadata = function () {
        state.songDuration = this.duration
      }
      //  当前播放位置改变时，获取当前播放位置
      state.audioDomElement.ontimeupdate = function () {
        state.songCurrentTime = this.currentTime
      }
    },
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
      state.playStatus = true
    },
    pauseControl (state) { //  暂停控制
      state.audioDomElement.pause()
      state.playStatus = false
    },
    setPhoneResolutionWidth (state) { //  获取手机分辨率宽度
      state.phoneResolutionWidth = window.screen.width * window.devicePixelRatio
    },
    setPlaylist (state, payload) { //  设置正在播放列表
      state.playlist = payload
    },
    removeItemFromPlaylist (state, index) { //  从播放列表中移除一个元素
      state.playlist.list.splice(index, 1)
    },
    setSongCurrentTime (state, time) { //  设置当前正在播放音频的播放时间
      state.songCurrentTime = time
      state.audioDomElement.currentTime = time
    },
    setSongDuration (state, time) { //  设置当前正在播放音频的总时长
      state.songDuration = time
    },
    setSongMsgIndex (state, index) { //  设置正在播放歌曲在列表的索引位置
      state.songMsgIndex = index
    },
    setPlayMode (state) { //  更改播放模式，
      //  三种：listCycle（列表循环），listRandom（列表随机）,singleCycle(单曲循环)
      if (state.playMode === 'listCycle') {
        state.playMode = 'listRandom'
      } else if (state.playMode === 'listRandom') {
        state.playMode = 'singleCycle'
      } else {
        state.playMode = 'listCycle'
      }
    },
    resetPlaylist (state) { //  清空/重置播放列表
      state.playlist = {
        id: 0, //  类型不为搜索的歌单ID
        type: 'list', //  当前播放列表来源类型 { list: 歌单列表, search: 搜索列表}
        list: []
      }
    }
  }
}
/**
 * 返回一个规定范围内的随机数
 * @param startRange 最小范围
 * @param endRange 最大范围
 * @returns {number}
 */
function randomRange (startRange, endRange) {
  return Math.floor(Math.random() * (endRange + 1 - startRange) + startRange)
}
export default storeConfig
