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
    var  achievement = "12132321" || ""
    console.log(achievement)
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
