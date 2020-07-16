<template>
  <div id="echarts">
    <div class="children LineChart">
      <nav>
        <a-icon type="right" style="color:#dba638;fontSize:0.15rem" />
        <span>折线图</span>
      </nav>
      <section>
        <!-- <componentsLineChart /> -->
      </section>
    </div>
    <div class="children">
    </div>
  </div>
</template>

<script>
import componentsLineChart from "../../../components/echarts/LineChart";
import shiyan from '../../../components/shiyan'
export default {
  name: "echarts",
  components: {
    componentsLineChart,
    shiyan
  },
  props: {},
  data() {
    return {};
  },
  beforeUpdate() {},
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
#echarts {
  background-color: #ece4d8;
  padding: 2vw;
  .children {
    margin-bottom: 1vw;
    border-bottom: 2px solid #bdb6ad;
    nav {
      font-size: 0.15rem;
      display: flex;
      align-items: center;
      img {
        height: 1.5vw;
      }
      span {
        display: block;
        height: 3vw;
        line-height: 3vw;
        margin-left: 1vw;
      }
    }
    section {
      height: 20vw;
      width: 100%;
    }
  }
  .LineChart {
    section {
      width: 100%;
      height: 20vw;
    }
  }
}
</style>
