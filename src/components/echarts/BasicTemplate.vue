// echarts基本模板
<template>
  <div id="BasicTemplate">
    <div :id="idName" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>

<script>
export default {
  name: "BasicTemplate",
  components: {},
  props: {
    idName: {
      type: String,
      default: "myChart"
    }
  },
  data() {
    return {
       myChart: "",
    };
  },
  watch: {
    dataIndex(news, olds) {
      // 销毁实例，实例销毁后无法再被使用。使得之前定义的点击事件被销毁.
      this.myChart.dispose();
      this.ele();
      this.visitor();
      //   this.dispatchAction(news);
    }
  },
  created() {},
  mounted() {
    this.ele();
    this.visitor();
    // this.dispatchAction(this.dataIndex);
    window.onresize = () => {
      this.ele();
      this.visitor();
      //   this.dispatchAction(this.dataIndex);
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
      let option = {};
      this.myChart.clear();
      this.myChart.setOption(option);
      // 使用箭头函数,修订this指向.
      this.myChart.on("click", param => {
        // this.$emit("change", param.dataIndex);
      });
    },
    dispatchAction(dataIndex) {
      // 设置默认被选中的内容区域
      //   this.myChart.dispatchAction({
      //     type: "pieToggleSelect",
      //     // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
      //     dataIndex: dataIndex
      //   });
      this.change = this.datas[dataIndex]["name"];
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
</style>
