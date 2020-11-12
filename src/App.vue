<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
// less外部文件的使用
@import "../static/font/DotPixelFont/DottedSongtiSquareRegular.less";
#app {
  font-family: "DottedSongtiSquareRegular";
  /* 清除浮动(兼容) */
  /* <br class="clear"> */
  .clear {
    height: 0px;
    line-height: 0px;
    font-size: 0px;
    clear: both;
    overflow: hidden;
  }
}
</style>
