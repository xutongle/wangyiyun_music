<template>
  <div class="music-list-component">
    <ul class="music-list">
      <li class="flex music-list-item">
        <div class="music-item">
          <div class="flex music-detail">
            <div class="music-name">Beautiful(haha)</div>
            <div class="icon-mv"></div>
          </div>
          <div class="music-singer">Project46 - Beautiful</div>
        </div>
        <div class="icon-ellipsis"></div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .music-list {
    padding-left: 0.9375rem;
    /*border-top: 1px solid #e5e7e8;*/
  }
  .music-list-item {
    padding: 0.5rem 0 0.3125rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7e8;
  }
  .music-detail {
    align-items: center;
  }
  .music-name {
    font-size: 14px;
    line-height: 1.5rem;
  }
  [data-dpr="2"] .music-name {
    font-size: 28px;
  }
  [data-dpr="3"] .music-name {
    font-size: 42px;
  }
  .icon-mv {
    margin-left: 0.3125rem;
    width: 1.958rem;
    height: 0.8333rem;
    background-image: url("../../../static/images/icon_mv.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .music-singer {
    color: #797a7b;
    line-height: 0.875rem;
  }
  .icon-ellipsis {
    margin-right: 1.0625rem;
    width: 0.8125rem;
    height: 0.8125rem;
    background-image: url("../../../static/images/icon_ellipsis.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
