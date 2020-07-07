<template>
  <div id="Head">
    <div class="headPortrait">
      <a-avatar shape="square" src="../../static/images/headPortrait.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  components: {},
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
#Head {
  height: 3vw;
  background-color: rgb(214, 206, 129);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .headPortrait {
    height: 100%;
    width: 5vw;
    display: flex;
    justify-content: center;
    border-left: 2px dotted rgb(184, 174, 42);
    /deep/.ant-avatar.ant-avatar-square.ant-avatar-image {
      height: 100%;
      display: flex;
      align-items: center;
      img {
        display: block;
        height: 80%;
      }
    }
  }
}
</style>
