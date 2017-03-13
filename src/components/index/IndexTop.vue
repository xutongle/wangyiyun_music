<template>
  <div class="index-top primary-bg-color flex">
    <div class="logo"></div>
    <div class="search"></div>
  </div>
</template>
<style scoped>
  .index-top {
    height: 3.25rem;
    padding-right: 0.875rem;
    justify-content: space-between;
    align-items: center;
  }
  .index-top .logo {
    width: 9.357rem;
    height: 3rem;
    background: url("../../../static/images/index/logo.png") no-repeat;
    background-size: 100% 100%;
  }
  .index-top .search {
    width: 1.25rem;
    height: 1.25rem;
    background: url("../../../static/images/index/m5.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
<script>
  export default{
    name: 'top',
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
