<template>
  <div id="home">
    <Head />
    <div class="box">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Head from "../../components/Head";
export default {
  name: "home",
  components: {
    Head
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
  watch: {}
};
</script>

<style lang="less" scoped>
#home {
}
</style>
