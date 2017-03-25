// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import vuex from 'vuex'
import storeConfig from './store/index'

Vue.config.productionTip = false

Vue.use(vuex)
Vue.use(VueResource)

//  获取store对象
const store = new vuex.Store(storeConfig)

//  设置全局http请求链接
Vue.http.options.root = process.env.NODE_ENV !== 'production' ? '/api' : ''
//  模拟表单提交数据
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

//  下面是一些公用的filter
/**
 * 用于过滤歌手列表,将歌手信息返回为以‘/’分割模式
 * @list 歌手列表数组
 * return string
 */
Vue.filter('transformArtistList', list => {
  var str = ''
  var listLength = list.length
  if (listLength === 1) {
    return list[0].name
  } else {
    list.forEach(function (value, index) {
      if (index !== (listLength - 1)) {
        str += value.name + '/'
      } else {
        str += value.name
      }
    })
    return str
  }
})
