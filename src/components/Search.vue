<template>
  <div class="flex search-component">
    <div class="flex search-header primary-bg-color">
      <icon-back></icon-back>
      <div class="search-container">
        <div v-show="!keyword" class="search-placeholder">搜索音乐、歌手、歌词、用户</div>
        <input class="search-input" type="text" v-model="keyword">
      </div>
    </div>
    <div class="search-suggestion">
      <div class="flex artists-classification">
        <div class="icon-artist background"></div>
        <div class="artists-classification-name">歌手分类</div>
        <div class="icon-arrow background"></div>
      </div>
      <div class="keywords-hot">
        <div class="keywords-hot-title">热门搜索</div>
        <ul class="flex keyword-hot-list">
          <li class="keyword-hot-item">借我</li>
          <li class="keyword-hot-item">告白气球</li>
          <li class="keyword-hot-item">一首写给她的歌</li>
          <li class="keyword-hot-item">成都</li>
          <li class="keyword-hot-item">大唐荣耀</li>
          <li class="keyword-hot-item">陈奕迅</li>
          <li class="keyword-hot-item">薛之谦</li>
          <li class="keyword-hot-item">防弹少年团</li>
          <li class="keyword-hot-item">莫文蔚</li>
        </ul>
      </div>
      <ul class="search-history-list">
        <li class="flex search-history-item">
          <div class="search-history-icon-time background"></div>
          <div class="flex search-history-item-content">
            <div class="search-history-item-name">龙卷风</div>
            <div class="search-history-icon-remove background"></div>
          </div>
        </li>
        <li class="flex search-history-item">
          <div class="search-history-icon-time background"></div>
          <div class="flex search-history-item-content">
            <div class="search-history-item-name">演员</div>
            <div class="search-history-icon-remove background"></div>
          </div>
        </li>
        <li class="flex search-history-item">
          <div class="search-history-icon-time background"></div>
          <div class="flex search-history-item-content">
            <div class="search-history-item-name">Style</div>
            <div class="search-history-icon-remove background"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .search-component {
    height: 100%;
    flex-direction: column;
  }
  .search-header {
    padding-right: 0.5rem;
    padding-left: 1.125rem;
    height: 3.25rem;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
  }
  .search-container {
    position: relative;
    flex-grow: 1;
    margin-left: 1.125rem;
    height: 2.25rem; /*  36px  */
  }
  .search-placeholder,
  .search-input
  {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    line-height: 2.25rem;
  }
  .search-placeholder {
    z-index: 5;
    color: #e0756e;
  }
  .search-input {
    z-index: 9;
    padding: 0;
    color: #fff;
    height: 2.1875rem; /*  35px  */
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
  }
  /*  搜索建议及历史  */
  .search-suggestion {
    flex-grow: 1;
  }
  .artists-classification {
    height: 2.75rem; /*  44px  */
    justify-content: center;
    align-items: center;
    border-bottom: 0.0625rem solid #e8e9ea;
  }
  .icon-artist {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("../../static/images/icon_artist.png");
  }
  .icon-arrow {
    flex-shrink: 0;
    width: 0.5rem;
    height: 0.875rem;
    background-image: url("../../static/images/icon_arrow.png");
  }
  .artists-classification-name {
    margin-right: 0.6875rem; /*  11px  */
    margin-left: 0.4375rem; /*  7px  */
    font-size: 14px;
    color: #616262;
    line-height: 1.25rem;
  }
  [data-dpr="2"] .artists-classification-name {
    font-size: 28px;
  }
  [data-dpr="3"] .artists-classification-name {
    font-size: 42px;
  }
  .keywords-hot {
    margin-top: 1.125rem; /*  18px  */
  }
  .keywords-hot-title {
    color: #797a7b;
    line-height: 1.25rem; /*  20px  */
  }
  .keyword-hot-list {
    padding-right: 1.25rem; /*  20px  */
    padding-left: 0.625rem; /*  10px  */
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .keyword-hot-item {
    list-style: none;
    flex-shrink: 0;
    margin-top: 0.5625rem; /*  9px  */
    margin-right: 0.3125rem; /*  5px  */
    padding-right: 0.625rem; /*  10px  */
    padding-left: 0.625rem;
    line-height: 1.75rem; /*  28px  */
    border: 0.0625rem solid #ced0d0;
    border-radius: 0.875rem; /*  14px  */
  }
  .search-history-list {
    margin-top: 1rem;
  }
  .search-history-item {
    justify-content: space-between;
    align-items: center;
  }
  .search-history-icon-time {
    flex-shrink: 0;
    width: 2.125rem; /*  34px  */
    height: 0.9375rem;
    background-image: url("../../static/images/icon_time.png");
    background-size: 0.9375rem 0.9375rem;/*  15px 15px  */
    background-position: center center;
  }
  .search-history-item-content {
    flex-grow: 1;
    height: 2.75rem; /*  44px  */
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.0625rem solid #e8e9ea;
  }
  .search-history-item-name {
    flex-grow: 1;
    line-height: 2.75rem; /*  44px  */
  }
  .search-history-icon-remove {
    flex-shrink: 0;
    width: 2.75rem; /*  44px  */
    height: 2.75rem; /*  44px  */
    background-image: url("../../static/images/icon_remove.png");
    background-size: 0.75rem 0.75rem; /*  12px 12px  */
    background-position: center center;
  }
</style>
<script>
  import IconBack from './common/IconBack.vue'
  export default{
    data () {
      return {
        keyword: '' //  搜索关键字
      }
    },
    methods: {
    },
    created () {
    },
    components: {
      IconBack
    }
  }
</script>
