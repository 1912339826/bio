<template>
  <div id="echarts">
    <div class="children SmoothedLineChart">
      <nav>
        <img src="static/images/chevron.png" alt />
        <span>平滑折线图</span>
      </nav>
      <section>
        <div class="box">
          <componentsSmoothedLineChart
            :lineStyle="SmoothedLineChart"
            ref="componentsSmoothedLineCharts"
          />
        </div>
        <div class="content_right">
          <p>
            <img src="static/images/chevron.png" alt />
            <span>lineStyle:</span>
          </p>
          <p>
            线性渐变:
            <label for="lineStyle_begin_color">0%:</label>
            <input
              type="color"
              name
              id="lineStyle_begin_color"
              :default-value="SmoothedLineChart.lineStyle_begin_color"
              @change="lineStyle_begin_color($event)"
            />
            <label for="lineStyle_end_color">100%:</label>
            <input
              type="color"
              name
              id="lineStyle_end_color"
              :default-value="SmoothedLineChart.lineStyle_end_color"
              @change="lineStyle_end_color($event)"
            />
          </p>
          <p>
            <a-button type="link" @click="confirm">Link</a-button>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import componentsSmoothedLineChart from "../../../components/echarts/SmoothedLineChart";
export default {
  name: "echarts",
  components: {
    componentsSmoothedLineChart
  },
  props: {},
  data() {
    return {
      SmoothedLineChart: {
        lineStyle_begin_color: "#b53030",
        lineStyle_end_color: "#6f5858"
      }
    };
  },
  beforeUpdate() {
    // console.log(this.$refs.componentsSmoothedLineCharts);
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    confirm() {
      console.log(this.SmoothedLineChart);
    },
    lineStyle_begin_color(e) {
      this.SmoothedLineChart.lineStyle_begin_color = e.target.value;
    },
    lineStyle_end_color(e) {
      this.SmoothedLineChart.lineStyle_end_color = e.target.value;
    }
  },
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
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      img {
        height: 2vw;
      }
      span {
        display: block;
        height: 3vw;
        line-height: 3vw;
        margin-left: 1vw;
      }
    }
    section {
      display: flex;
      justify-content: space-between;
      .box {
        height: 20vw;
        width: 50%;
      }
      .content_right {
        width: 50%;
        border-left: 2px solid #bdb6ad;
        background-color: #fff6e9;
        padding: 1vw;
      }
    }
  }
  .SmoothedLineChart {
    section {
      height: 20vw;
    }
  }
}
</style>
