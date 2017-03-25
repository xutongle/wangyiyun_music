<template>
  <div class="flex cate-title-component">
    <h4 class="cate-title">{{ title }}</h4>
    <div class="icon-arrow background"></div>
  </div>
</template>
<style scoped>
  .cate-title-component {
    margin-top: 1.1875rem;
    margin-bottom: 0.625rem;
    align-items: center;
  }
  .cate-title {
    position: relative;
    margin: 0;
    padding-left: 0.5625rem;
    padding-right: 0.4375rem;
    font-size: 14px;
    line-height: 1.5rem;
  }
  .cate-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.3125rem;
    height: 0.9375rem;
    width: 0.125rem;
    background-color: #d33a31;
  }
  [data-dpr="2"] .cate-title {
    font-size: 28px;
  }
  [data-dpr="3"] .cate-title {
    font-size: 42px;
  }
  .icon-arrow {
    width: 0.5rem;
    height: 0.875rem;
    background-image: url('../../../static/images/index/yv.png');
  }
</style>
<script>
  export default{
    props: {
      title: {
        Type: String,
        required: true
      }
    }
  }
</script>
