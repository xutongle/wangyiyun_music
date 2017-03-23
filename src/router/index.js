import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Player from '@/components/Player.vue'
import MusicList from '@/components/common/MusicList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/musicList/:id',
      name: 'MusicList',
      component: MusicList
    }
  ]
})
