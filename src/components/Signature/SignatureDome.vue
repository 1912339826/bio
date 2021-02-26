<template>
  <div id="Signature">
    <div id="canvas">
      <section class="canvas_box" id="canvas_box">
        <canvas />
      </section>
      <div class="button_">
        <p id="clearCanvas">清除</p>
        <p id="saveCanvas">保存</p>
        <p id="cancelCanvas">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { Tabs, Toast } from "vant";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      fon: new Function()
    };
  },
  created() {},
  mounted() {
    this.lineCanvas(
      document.querySelector("#canvas_box").clientWidth,
      document.querySelector("#canvas_box").clientHeight
    );
  },
  activated() {},
  update() {},
  methods: {
    lineCanvas(clientWidth, clientHeight) {
      let ta = this;
      window.onload = function () {
        ta.fon = new lineCanvas({
          el: document.querySelector("#canvas_box"),
          clearEl: document.querySelector("#clearCanvas"),
          saveEl: document.querySelector("#saveCanvas"),
          cancelEl: document.querySelector("#cancelCanvas"),
        });
      };
      function lineCanvas(obj) {
        this.lineWidth = 5;
        this.color = "#000";
        this.background = "#fff";
        for (var i in obj) {
          this[i] = obj[i];
        }

        this.canvas = document.getElementsByTagName("canvas")[0];
        // this.canvas.width = this.el.clientWidth;
        // this.canvas.height = this.el.clientHeight;
        this.canvas.width = clientWidth;
        this.canvas.height = clientHeight;
        console.log(
          this.canvas.width,
          this.canvas.height,
          "11111111",
          clientWidth
        );

        this.cxt = this.canvas.getContext("2d");
        this.cxt.fillStyle = this.background;
        this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.cxt.lineWidth = this.lineWidth;
        this.cxt.lineCap = "round"; // 线条末端添加圆形线帽，减少线条的生硬感
        this.cxt.lineJoin = "round"; // 线条交汇时为原型边角
        // 利用阴影，消除锯齿
        this.cxt.shadowBlur = 1;
        this.cxt.shadowColor = "#000";
        this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height); //先擦除一遍

        // 开始绘制
        this.canvas.addEventListener(
          "touchstart",
          function (e) {
            this.cxt.beginPath();
            this.cxt.moveTo(
              e.changedTouches[0].pageX,
              e.changedTouches[0].pageY
            );
          }.bind(this),
          false
        );

        // 绘制中
        this.canvas.addEventListener(
          "touchmove",
          function (e) {
            this.cxt.lineTo(
              e.changedTouches[0].pageX,
              e.changedTouches[0].pageY
            );
            this.cxt.stroke();
          }.bind(this),
          false
        );

        // 结束绘制
        this.canvas.addEventListener(
          "touchend",
          function (e) {
            this.cxt.closePath();
          }.bind(this),
          false
        );

        // 清除画布
        this.clearEl.addEventListener(
          "click",
          function () {
            this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
          }.bind(this),
          false
        );

        // 保存图片
        this.saveEl.addEventListener(
          "click",
          function () {
            var imgPng = this.canvas.toDataURL("image/png");
            // var imgJpg = this.canvas.toDataURL("image/jpeg", 0.8);
            // console.log(imgPng);
            ta.save(imgPng);
          }.bind(this),
          false
        );
        // 取消
        this.cancelEl.addEventListener(
          "click",
          function () {
            this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ta.cancel();
          }.bind(this),
          false
        );
      }
    },
    save(e) {
      if (
        e ==
        "data:image/png;base64,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"
      ) {
        // Toast("请签字!");
      } else {
          console.log(e)
        // this.$store.dispatch("SET_FINALSCORE", {
        //   name: "signatureUrl",
        //   value: e,
        // });
        // this.$root.Bus.$emit("Signature", { key: "save", value: e });
      }
    },
    cancel() {
        console.log("取消")
    //   this.$root.Bus.$emit("Signature", { key: "cancel" });
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#Signature {
  position: relative;
  top: 0;
  z-index: 2005;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
}

#canvas {
  width: 100vw;
  height: 100vh;
}

#canvas canvas {
  display: block;
  border: 2px red dashed;
  background-color: #e4e0e0;
  width: 100%;
  height: 100%;
}

#canvas_box {
  // border: 2px darkgoldenrod solid;
  width: 100%;
  height: 80vh;
}

.button_ {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}

#clearCanvas,
#saveCanvas,
#cancelCanvas {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #dedede;
  font-size: 18px;
  border-radius: 10px;
}

.errorCanvas {
  width: 100%;
  height: 100%;
  text-align: center;
  transform: translateY(40%);
}
</style>
