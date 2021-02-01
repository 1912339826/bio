// 折线和柱状图
<template>
  <div id="FoldsAndColumns">
    <div
      :id="idName"
      class="FoldsAndColumns_child"
      :style="{ width: '1000px', height: '500px' }"
    ></div>
    <!-- <img :src="imgs" alt /> -->
  </div>
</template>

<script>
export default {
  name: "FoldsAndColumns",
  data() {
    return {
      imgs: "",
    };
  },
  props: {
    idName: {
      type: String,
      default: "FoldsAndColumnsMY",
    },
  },
  mounted() {
    this.visitor();
    window.onresize = () => {
      this.imgs = "";
      this.visitor();
    };
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      window.onresize = myChart.resize;
      myChart.setOption({
        color: ["#37a2da", "#32c5e9", "#9fe6b8", "#ffdb5c", "#ff9f7f"],
        tooltip: {
          show: false,
          //   trigger: "item",
          //   formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        toolbox: {
          show: false,
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: "10%",
          align: "left",
          top: "middle",
          textStyle: {
            color: "#8C8C8C",
          },
          height: 150,
        },
        series: [
          {
            name: "业务警种",
            type: "pie",
            radius: ["45%", "60%"],

            data: [
              { value: 20, name: "国宝" },
              { value: 30, name: "治安" },
              { value: 25, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
            ],
          },
        ],
      });
      // var img = new Image();
      // img.src = myChart.getDataURL({
      //   pixelRatio: 2,
      //   backgroundColor: "#2d579b"
      // });
      // this.imgs = img.src;
    },
  },
};
</script>

<style scoped>
#FoldsAndColumns {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#FoldsAndColumns > .FoldsAndColumns_child {
  position: absolute;
  /* visibility: hidden; */
}

#FoldsAndColumns > img {
  position: absolute;
  width: 100%;
  height: 90%;
  z-index: 999;
  top: 0;
  left: 0;
}
</style>