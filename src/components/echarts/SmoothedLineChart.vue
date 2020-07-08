// 平滑的折线图
<template>
  <div id="SmoothedLineChart">
    <div :id="idName" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
export default {
  name: "SmoothedLineChart",
  components: {},
  props: {
    idName: {
      type: String,
      default: "myChart"
    },
    lineStyle: {
      type: Object,
      default: () => {
        return {
          lineStyle_begin_color: "#b53030",
          lineStyle_end_color: "#6f5858"
        };
      }
    }
  },
  watch: {
    lineStyle: {
      handler(news, olds) {
        this.change();
      },
      deep: true
    }
  },
  computed: {},
  data() {
    return {
      myChart: ""
    };
  },
  created() {},
  mounted() {
    this.ele();
    this.visitor();
    this.dispatchAction(0);
    window.onresize = () => {
      this.ele();
      this.visitor();
      this.dispatchAction(0);
    };
  },
  activated() {},
  update() {},
  methods: {
    ele() {
      this.myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "vintage"
      );
    },
    visitor() {
      window.onresize = this.myChart.resize;
      let option = {
        backgroundColor: "#fff6e9",
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [100, 100, 100, 100, 100, 100, 100],
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 1,
                  y: 1,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: this.lineStyle.lineStyle_begin_color // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: this.lineStyle.lineStyle_end_color // 100% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false,如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                }
              }
            }
          }
        ],
        tooltip: {
          show: true,
          trigger: "axis"
        }
      };
      this.myChart.clear();
      this.myChart.setOption(option);
      // 使用箭头函数,修订this指向.
      this.myChart.on("click", param => {
        console.log(param.componentSubType);
        // this.$emit("change", param.dataIndex);
      });
    },
    dispatchAction(dataIndex) {
      // 设置默认被选中的内容区域
      this.myChart.dispatchAction({
        type: "highlight",
        dataIndex: 0
      });
    },
    change() {
      this.myChart.dispose();
      this.ele();
      this.visitor();
      this.dispatchAction(0);
    }
  },
  filters: {}
};
</script>

<style lang="less" scoped>
#SmoothedLineChart {
  height: 100%;
}
</style>
