<template>
  <div id="app">
    <router-view v-if="ispc&&$route.meta.ispc"></router-view>
    <router-view v-if="!ispc&&!$route.meta.ispc"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      ispc: true
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
