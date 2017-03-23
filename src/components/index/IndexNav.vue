<template>
  <div class="index-nav-component">
    <ul class="tabs flex">
      <li class="tab-item align-center primary-color tab-item-active">我的歌单</li>
      <li class="tab-item align-center">歌单</li>
      <li class="tab-item align-center">MV</li>
      <li class="tab-item align-center">排行榜</li>
    </ul>
    <div class="tab-content">
      <index-banner></index-banner>
      <cate-title title="推荐歌单"></cate-title>
      <div class="flex song-list-container">
        <song-list :id="447039671"></song-list>
        <song-list :id="560801222"></song-list>
        <song-list :id="506954473"></song-list>
        <song-list :id="506913893"></song-list>
        <song-list :id="505347469"></song-list>
        <song-list :id="323396962"></song-list>
      </div>
      <cate-title title="推荐MV"></cate-title>
      <div class="flex mv-recommend-container">
        <mv-recommend></mv-recommend>
        <mv-recommend></mv-recommend>
        <mv-recommend></mv-recommend>
        <mv-recommend></mv-recommend>
      </div>
    </div>
  </div>
</template>
<style scoped>
  li {
    list-style: none;
  }
  .tabs {
    background-color: #feffff;
  }
  .tabs .tab-item {
    width: 25%;
    font-size: 14px;
    color: #666;
    line-height: 2.25rem;
    border-bottom: 0.125rem solid #feffff;
  }
  .tabs .tab-item-active {
    color: #d33a31;
    border-bottom-color: #d33a31;
  }
  [data-dpr="2"] .tabs .tab-item {
    font-size: 28px;
  }
  [data-dpr="3"] .tabs .tab-item {
    font-size: 42px;
  }
  .song-list-container,
  .mv-recommend-container
  {
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
<script>
  import IndexBanner from './IndexBanner.vue'
  import CateTitle from '../common/CateTitle.vue'
  import SongList from '../common/SongList.vue'
  import MvRecommend from '../common/MvRecommend.vue'
  export default{
    data () {
      return {
      }
    },
    methods: {
    },
    created () {
    },
    components: {
      IndexBanner, CateTitle, SongList, MvRecommend
    }
  }
</script>
