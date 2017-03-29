<template>
  <div class="mv-player-component">
    <video :src="videoUrl" id="mvPlayer"></video>
  </div>
</template>
<style scoped>
</style>
<script>
  export default{
    data () {
      return {
        videoUrl: '', //  视频播放地址
        videoDomElement: '' //  视频DOM对象
      }
    },
    methods: {
      getVideoUrl () {
        this.$http({url: 'music_data.php', params: {video: this.$route.query, filename: Math.random()}}).then(function (res) {
          console.log(res)
          this.videoUrl = res.data
          this.videoDomElement.play()
        })
      },
      getVideoDomElement () {
        this.videoDomElement = document.getElementById('mvPlayer')
      }
    },
    created () {
      this.getVideoUrl()
    },
    mounted () {
      this.getVideoDomElement()
    }
  }
</script>
