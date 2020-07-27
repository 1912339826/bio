<template>
  <div class="hello">
    <div :id="idName" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      idName: "aaa",
      change: "",
      myChart: "",
      datas: [
        {
          name: "XX1",
          value: 77,
        },
        {
          name: "XX2",
          value: 78
        },
        {
          name: "XX3",
          value: 79
        },
        {
          name: "XX4",
          value: 80
        }
      ]
    };
  },
  props: {
    dataIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    dataIndex(news, olds) {
      // 销毁实例，实例销毁后无法再被使用。使得之前定义的点击事件被销毁.
      this.myChart.dispose();
      this.ele();
      this.visitor();
      this.dispatchAction(news);
    }
  },
  mounted() {
    this.ele();
    this.visitor();
    this.dispatchAction(this.dataIndex);
    window.onresize = () => {
      this.ele();
      this.visitor();
      this.dispatchAction(this.dataIndex);
    };
  },
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
        backgroundColor: "#ffffff",
        series: [
          {
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: this.datas,
            animation: false,
            label: {
              show: false
            },
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        ]
      };
      this.myChart.clear();
      this.myChart.setOption(option);
      // 使用箭头函数,修订this指向.
      this.myChart.on("click", param => {
        this.$emit("change", param.dataIndex);
      });
    },
    dispatchAction(dataIndex) {
      // 设置默认被选中的内容区域
      this.myChart.dispatchAction({
        type: "pieToggleSelect",
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        dataIndex: dataIndex
      });
      this.change = this.datas[dataIndex]["name"];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
