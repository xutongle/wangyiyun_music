<template>
  <div class="index-top primary-bg-color flex">
    <div class="logo background"></div>
    <div @click="goToSearch" class="search background"></div>
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
    background-image: url("../../../static/images/index/logo.png");
  }
  .index-top .search {
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("../../../static/images/index/m5.png");
  }
</style>
<script>
  export default{
    name: 'top',
    methods: {
      goToSearch () {
        this.$router.push({name: 'Search'})
      }
    }
  }
</script>
