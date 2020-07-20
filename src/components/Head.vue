<template>
  <div id="Head">
    <div class="top">
      <div class="left">
        <div class="box">
          <hello :dataIndex="changeIndex" @change="change" />
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
    </div>
  </div>
</template>

<script>
import headPortrait from "../../static/json/headPortrait.json";
import hello from "./echarts/HelloWorld";
export default {
  name: "Head",
  components: {
    hello
  },
  props: {},
  data() {
    return {
      // 此name与路由中name对应
      tab: [{ name: "XX1" }, { name: "XX2" }, { name: "XX3" }, { name: "XX4" }],
      changeIndex: 0
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    change(index) {
      // 防止重复点击.
      if (this.changeIndex != index) {
        this.changeIndex = index;
        if (this.$route.fullPath != this.tab[index].name) {
          this.$router.push(`/pc/${this.tab[index].name}`);
        }
      }
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#Head {
  background-color: #ece4d8;
  width: 100%;
  .top {
    display: flex;
    border: 2px dotted #dba638;
  }
  .left {
    height: 7vw;
    line-height: 3vw;
    text-align: center;
    width: 10vw;
    font-weight: 900;
    font-size: 0.5rem;
    .box {
      border-right: 2px dotted #dba638;
      width: 100%;
    }
  }
  .content {
    font-size: 0.15rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
    div {
      &:hover {
        color: #7c334f;
        cursor: pointer;
        font-weight: 900;
      }
    }
    .active {
      color: #7c334f;
      font-weight: 900;
    }
  }
}
</style>
