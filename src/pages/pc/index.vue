<template>
  <div id="home">
    <Head />
    <div class="box">
      <!-- <section style="background-color: #ece4d8;">
        <Aside />

      </section>-->
      <section style="width:100vw;background-color: #ece4d8; margin-top: 2w ;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </section>
    </div>
  </div>
</template>

<script>
import Head from "../../components/Head";
import Aside from "../../components/Aside";
export default {
  name: "home",
  components: {
    Head,
    Aside
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
  .box {
    display: flex;
  }
}
</style>
