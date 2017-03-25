<template>
  <div @click="goBack" class="icon-back-component background"></div>
</template>
<style scoped>
  .icon-back-component {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("../../../static/images/player/icon_back.png");
  }
</style>
<script>
  export default{
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
