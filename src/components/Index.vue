<template>
  <div class="index-component">
    <index-top></index-top>
    <index-nav></index-nav>
  </div>
</template>

<script>
  import IndexTop from './index/IndexTop.vue'
  import IndexNav from './index/IndexNav.vue'
  export default {
    name: 'index',
    data () {
      return {}
    },
    components: {
      IndexTop, IndexNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
