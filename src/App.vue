<template>
  <div id="app">
    <!-- <router-view v-if="ispc&&$route.meta.ispc"></router-view> -->
    <!-- <router-view v-if="!ispc&&!$route.meta.ispc"></router-view> -->
    <input type="file" name id="pop_video" @change="creatFileSrc($event)" />
    <video width="320" height="240" controls="controls" id="videoId">
    </video>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      ispc: true,
      videoFile
    };
  },
  created() {
    this.Mysetback();
  },
  mounted() {},
  methods: {
    Mysetback() {
      var u = navigator.userAgent;
      //Android终端
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      //iOS终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isAndroid || isiOS) {
        //如果为Android
        //如果为iOS
        this.ispc = false;
        this.$router.push("/phone");
      } else {
        this.ispc = true;
        this.$router.push("/pc");
      }
    },
    creatFileSrc(ev) {
      var that = this;
      var filesId = document.getElementById("pop_video");
      var videoId = document.getElementById("videoId");
      var url = getFileURL(filesId.files[0]); //把当前的 files[0] 传进去
      if (url) {
        videoId.src = url;
      }
      console.log(url)
      function getFileURL(file) {
        var getUrl = null;
        if (window.createObjectURL != undefined) {
          // basic
          getUrl = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          getUrl = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          getUrl = window.webkitURL.createObjectURL(file);
        }
        return getUrl;
      }
    }
  }
};
</script>

<style lang="less">
// less外部文件的使用
@import "./assets/font/DotPixelFont/DottedSongtiSquareRegular.less";
#app {
  font-family: "DottedSongtiSquareRegular";
}
</style>
