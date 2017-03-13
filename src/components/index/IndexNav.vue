<template>
  <div class="index-nav">
    <ul class="tabs flex">
      <li class="tab-item align-center primary-color tab-item-active">我的歌单</li>
      <li class="tab-item align-center">歌单</li>
      <li class="tab-item align-center">MV</li>
      <li class="tab-item align-center">排行榜</li>
    </ul>
    <div class="tab-content">
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
</style>
<script>
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
    }
  }
</script>
