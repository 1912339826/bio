<template>
  <div id="rotateY">
    <div class="flip_wrap">
      <div class="flip">
        <div class="side front">
          <p>正</p>
        </div>
        <div class="side back" @click="aa">
          <span>反</span>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rotateY",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#rotateY {
  font-size: 0.2rem;
  .flip_wrap {
    display: inline-block;
    width: 300px;
    height: 220px;
    margin: 50px;
    perspective: 800px; /*perspective属性定义3D元素距视图的距离,以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。*/
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -ms-perspective: 800px;
    -o-perspective: 800px;
  }
  .flip {
    width: 100%;
    height: 100%;
    transition: all 1s ease; /*为翻牌添加过渡效果*/
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transform-style: preserve-3d; /*子元素将保留其 3D 位置。*/
  }
  .side {
    width: 100%;
    height: 100%;
    position: absolute; /*让背面和正面重叠*/
    left: 0;
    top: 0;
    color: #fff;
    text-align: center;
  }
  .front {
    backface-visibility: hidden;
    border: 1px solid #333;
    background: #ff002b;
  }
  .back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    background: #ff002b;
    padding: 0 36px;
    box-sizing: border-box;
  }
  .flip_wrap:hover .flip {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
  }
}
</style>
