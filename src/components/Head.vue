<template>
  <div id="Head">
    <div class="left">
      <div class="box">
        <hello :dataIndex="changeIndex" @change="change"/>
      </div>
    </div>
    <div class="content">
      <div
        v-for="(item, index) in tab"
        :key="index"
        @click="change(index)"
        :class="changeIndex==index?'active':''"
      >{{item.name}}</div>
    </div>
    <div class="headPortrait">
      <img src="static/images/headPortrait.jpg" alt />
    </div>
  </div>
</template>

<script>
import hello from "../components/HelloWorld";
export default {
  name: "Head",
  components: {
    hello
  },
  props: {},
  data() {
    return {
      tab: [
        { name: "echarts" },
        { name: "XX1" },
        { name: "XX2" },
        { name: "XX3" }
      ],
      changeIndex: 0
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    change(index) {
      this.changeIndex = index;

    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#Head {
  height: 7vw;
  background-color: #ece4d8;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    height: 7vw;
    line-height: 3vw;
    text-align: center;
    width: 10%;
    font-weight: 900;
    font-size: 1.5rem;
    .box {
      border-right: 2px dotted #dba638;
      width: 100%;
    }
  }
  .content {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    div {
      &:hover {
        color: #7c334f;
        cursor: pointer;
        font-weight:900
      }
    }
    .active {
      color: #7c334f;
      font-weight: 900;
    }
  }
  .headPortrait {
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px dotted #dba638;
    img {
      height: 70%;
    }
  }
}
</style>
