<template>
  <div id="set">222</div>
</template>

<script>
export default {
  name: "set",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {
    // console.log(window.history.pushState)
  },
  mounted() {
    // if (window.history && window.history.pushState) {
    //   history.pushState(null, null, document.URL);

    //   window.addEventListener("popstate", this.fun, false); //false阻止默认事件
    // }
  },
  activated() {},
  update() {},
  methods: {
    fun() {
      alert('111')
      console.log("监听到了");
    }
  },
  filters: {},
  computed: {},
  watch: {},
  destroyed() {
    // window.removeEventListener("popstate", this.fun, false); //false阻止默认事件
  }
};
</script>

<style lang="less" scoped>
</style>
