<template>
  <div id="home">
      <img :src="headPortrait.snipaste.url" alt="">
  </div>
</template>

<script>
import headPortrait from "./headPortrait.json";
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
        headPortrait:{}
    };
  },
  created() {
    console.log(headPortrait);
    this.headPortrait = headPortrait;
  },
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
}
</style>
