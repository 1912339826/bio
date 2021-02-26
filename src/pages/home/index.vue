<template>
  <div id="home">
    <SignatureDome />
  </div>
</template>

<script>
import SignatureOne from "../../components/Signature/SignatureOne";
import SignatureDome from "../../components/Signature/SignatureDome";
import SignatureTwo from "../../components/Signature/SignatureTwo";
export default {
  name: "home",
  components: {
    SignatureOne,
    SignatureDome,
    SignatureTwo,
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#home {
  display: flex;
  // transform: rotate(90deg);
  // -ms-transform: rotate(90deg); /* IE 9 */
  // -moz-transform: rotate(90deg); /* Firefox */
  // -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
  // -o-transform: rotate(90deg); /* Opera */
}
@media screen and (orientation: portrait) {
  #home {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    width: 100vh;
    height: 100vh;
    /*去掉overflow 微信显示正常，但是浏览器有问题，竖屏时强制横屏缩小*/
    overflow: hidden;
  }
}

@media screen and (orientation: landscape) {
  #home {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
}
</style>
