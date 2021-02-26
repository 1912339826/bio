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
  mounted() {
    function orientationChange() {
      switch (window.orientation) {
        case 0:
          alert(
            "肖像模式 0,screen-width: " +
              screen.width +
              "; screen-height:" +
              screen.height
          );
          break;
        case -90:
          alert(
            "左旋 -90,screen-width: " +
              screen.width +
              "; screen-height:" +
              screen.height
          );
          break;
        case 90:
          alert(
            "右旋 90,screen-width: " +
              screen.width +
              "; screen-height:" +
              screen.height
          );
          break;
        case 180:
          alert(
            "风景模式 180,screen-width: " +
              screen.width +
              "; screen-height:" +
              screen.height
          );
          break;
      }
    }

    window.addEventListener("orientationchange", orientationChange);
  },
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
</style>
