<template>
  <div id="Signature">
    <div id="canvas">
      <div class="button_">
        <p id="clearCanvas">清除</p>
        <p id="saveCanvas">保存</p>
        <p id="cancelCanvas">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      fon: new Function(),
    };
  },
  created() {},
  mounted() {
    let ta = this;
    window.onload = function () {
      ta.fon = new lineCanvas({
        el: document.querySelector("#canvas"),
        clearEl: document.querySelector("#clearCanvas"),
        saveEl: document.querySelector("#saveCanvas"),
        cancelEl: document.querySelector("#cancelCanvas"),
        // lineWidth: 1, // 线条粗细
        // color: 'black', // 线条颜色
        // background: '#fff'
      });
    };
    function lineCanvas(obj) {
      this.lineWidth = 5;
      this.color = "#000";
      this.background = "#fff";
      for (var i in obj) {
        this[i] = obj[i];
      }

      this.canvas = document.createElement("canvas");
      if (!(this.canvas.getContext && this.canvas.getContext("2d"))) {
        this.section = document.createElement("section");
        this.section.className = "errorCanvas";
        this.section.innerHTML = "对不起，当前浏览器暂不支持此功能！";
        this.el.prepend(this.section);
        return;
      }
      this.canvas.width = this.el.clientWidth;
      this.canvas.height = this.el.clientHeight;
      this.el.prepend(this.canvas);

      this.cxt = this.canvas.getContext("2d");
      this.cxt.fillStyle = this.background;
      this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(this.canvas.height);
      this.cxt.strokeStyle = this.color;
      this.cxt.lineWidth = this.lineWidth;
      this.cxt.lineCap = "round"; // 线条末端添加圆形线帽，减少线条的生硬感
      this.cxt.lineJoin = "round"; // 线条交汇时为原型边角
      // 利用阴影，消除锯齿
      this.cxt.shadowBlur = 1;
      this.cxt.shadowColor = "#000";

      // 开始绘制
      this.canvas.addEventListener(
        "touchstart",
        function (e) {
          this.cxt.beginPath();
          this.cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        }.bind(this),
        false
      );

      // 绘制中
      this.canvas.addEventListener(
        "touchmove",
        function (e) {
          this.cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
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
          var imgJpg = this.canvas.toDataURL("image/jpeg", 0.8);
          console.log(imgPng, imgJpg);
        }.bind(this),
        false
      );
    }
  },
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

#Signature {
  position: relative;
  z-index: 9999;
  width: 100vw;
  height: 50vh;
}

#canvas {
  position: relative;
  z-index: 9999;
  width: 100vw;
  height: 50vh;
}

#canvas canvas {
  display: block;
}

.button_ {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  z-index: 1;
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
  border: 1px solid #dedede;
  font-size: 25px;
  
}

.errorCanvas {
  width: 100%;
  height: 100%;
  text-align: center;
  transform: translateY(40%);
}
</style>
