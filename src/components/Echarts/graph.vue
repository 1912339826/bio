// RelationalGraph 关系图
<template>
  <div class="RelationalGraph" style="width: 100%; height: 100%">
    <div :id="idName" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
export default {
  name: "RelationalGraph",
  data() {
    return {};
  },
  props: {
    num: {
      type: Number,
      default: 20,
    },
    idName: {
      type: String,
      default: "RelationalGraph",
    },
  },
  watch: {},
  mounted() {
    this.visitor();
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        title: {
          text: "",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "绿色型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            force: {
              repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                },
                formatter: "{c}",
              },
            },
            data: [
              {
                name: "绿色型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "1型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "2型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "3型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "4型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "5型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "6型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "7型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "8型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "9型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "10型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "11型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "12型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "13型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
              {
                name: "14型号工程型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985",
                  },
                },
              },
            ],
            links: [
              {
                source: "绿色型号工程",
                target: "1型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "2型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "3型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "4型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "5型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "6型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "7型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "8型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "9型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "10型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "11型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "12型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "13型号工程型号工程",
                value: "",
              },
              {
                source: "绿色型号工程",
                target: "14型号工程型号工程",
                value: "",
              },
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0,
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
</style>
