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
