// 平滑的折线图
<template>
  <div id="LineChart">
    <div :id="idName" :style="{ width: '50%', height: '100%' }"></div>
    <div class="content_right">
      <section class="box">
        <a-collapse default-active-key="1" :bordered="false">
          <template #expandIcon="props">
            <a-icon
              type="right"
              :rotate="props.isActive ? 90 : 0"
              :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
            />
          </template>
          <a-collapse-panel key="1" header="series：" :style="customStyle">
            <a-collapse default-active-key="1" :bordered="false">
              <template #expandIcon="props">
                <a-icon
                  type="right"
                  :rotate="props.isActive ? 90 : 0"
                  :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
                />
              </template>
              <a-collapse-panel key="1" header="lineStyle：" :style="customStyle">
                <a-collapse default-active-key="1" :bordered="false">
                  <template #expandIcon="props">
                    <a-icon
                      type="right"
                      :rotate="props.isActive ? 90 : 0"
                      :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
                    />
                  </template>
                  <a-collapse-panel key="1" header="normal：" :style="customStyle">
                    <a-collapse default-active-key="1" :bordered="false">
                      <template #expandIcon="props">
                        <a-icon
                          type="right"
                          :rotate="props.isActive ? 90 : 0"
                          :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
                        />
                      </template>
                      <a-collapse-panel key="1" header="color：" :style="customStyle">
                        <a-collapse default-active-key="1" :bordered="false">
                          <template #expandIcon="props">
                            <a-icon
                              type="right"
                              :rotate="props.isActive ? 90 : 0"
                              :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
                            />
                          </template>
                          <span>
                            <img src alt />
                            <span></span>
                            <a-radio-group name="radioGroup" :default-value="lineStyle_normal_color_type" @change="lineStyle_normal_color_type_change($event)">
                              <a-radio value="linear">linear</a-radio>
                              <a-radio value="radial">radial</a-radio>
                              <a-radio value="image">image</a-radio>
                            </a-radio-group>
                          </span>
                          <a-collapse-panel key="1" header="colorStops：" :style="customStyle">
                            <section style="display: flex;align-items: center;">
                              <label for="lineStyle_begin_color" title="开始">0%：</label>
                              <input
                                type="color"
                                name
                                id="lineStyle_begin_color"
                                :value="lineStyle_begin_color_data"
                                @change="lineStyle_begin_color($event)"
                                title="开始"
                              />
                              <img
                                src="static/images/exchange.png"
                                alt
                                class="exchange"
                                title="交换颜色"
                                @click="exchange_lineStyle_color"
                              />
                              <label for="lineStyle_end_color" title="结束">100%：</label>
                              <input
                                type="color"
                                name
                                id="lineStyle_end_color"
                                :value="lineStyle_end_color_data"
                                @change="lineStyle_end_color($event)"
                                title="结束"
                              />
                            </section>
                          </a-collapse-panel>
                        </a-collapse>
                      </a-collapse-panel>
                    </a-collapse>
                  </a-collapse-panel>
                </a-collapse>
              </a-collapse-panel>
            </a-collapse>
          </a-collapse-panel>
        </a-collapse>
      </section>

      <section style="height:3vw;display: flex;align-items: center;">
        <a-button type="link" @click="confirm" title="点击使得设置生效">确认</a-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  components: {},
  props: {
    idName: {
      type: String,
      default: "myChart"
    }
  },
  watch: {
    // 监听到数据有变化,立即执行change方法,重建DOM
    option: {
      handler(news, olds) {
        this.change();
      },
      deep: true
    }
  },
  computed: {},
  data() {
    return {
      customStyle:
        "background: #fff6e9;border-radius: 4px;border: 1vw;overflow: hidden;",
      myChart: "",
      lineStyle_begin_color_data: "",
      lineStyle_end_color_data: "",
      lineStyle_normal_color_type:"linear",
      option: {
        backgroundColor: "#fff6e9",
        tooltip: {
          show: true,
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [1000, 100, 110, 100, 110, 100, 110],
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: "#A9F387" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#111444" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                }
              }
            }
          }
        ]
      }
    };
  },
  created() {
    this.lineStyle_begin_color_data = this.option.series[0].lineStyle.normal.color.colorStops[0].color;
    this.lineStyle_end_color_data = this.option.series[0].lineStyle.normal.color.colorStops[1].color;
  },
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
      let option = this.option;
      this.myChart.clear();
      this.myChart.setOption(option);
      // 使用箭头函数,修订this指向.
      this.myChart.on("click", param => {
        console.log(param.componentSubType);
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
    },
    lineStyle_begin_color(e) {
      this.lineStyle_begin_color_data = e.target.value;
    },
    lineStyle_end_color(e) {
      this.lineStyle_end_color_data = e.target.value;
    },
    // 交换颜色
    exchange_lineStyle_color() {
      let lineStyle_begin_color_data = this.lineStyle_begin_color_data;
      let lineStyle_end_color_data = this.lineStyle_end_color_data;
      this.lineStyle_begin_color_data = lineStyle_end_color_data;
      this.lineStyle_end_color_data = lineStyle_begin_color_data;
    },
    // 折线的类型的选择
    lineStyle_normal_color_type_change(e){
      this.lineStyle_normal_color_type =e.target.value 
    },
    confirm() {
      // 更新赋值;
      this.option = {
        backgroundColor: "#fff6e9",
        tooltip: {
          show: true,
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [1000, 100, 100, 100, 100, 100, 100],
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: this.lineStyle_begin_color_data // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: this.lineStyle_end_color_data // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                }
              }
            }
          }
        ]
      };
    }
  },
  filters: {}
};
</script>

<style lang="less" scoped>
#LineChart {
  height: 100%;
  display: flex;

  width: 100%;
  .content_right {
    width: 50%;
    border-left: 2px solid #bdb6ad;
    background-color: #fff6e9;
    padding: 1vw;
    .exchange {
      height: 3vw;
      &:hover {
        cursor: pointer;
      }
    }
    .box {
      overflow-y: scroll;
      height: 15vw;
    }
  }
}
</style>
