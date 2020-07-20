<template>
  <div id="echarts">
    <div class="children LineChart">
      <nav>
        <a-icon type="right" style="color:#dba638;fontSize:0.15rem" />
        <span>折线图</span>
      </nav>
      <section>
        <!-- <componentsLineChart /> -->
      </section>
    </div>
    <div class="children">111</div>
  </div>
</template>

<script>
// import componentsLineChart from "../../../components/echarts/LineChart";
export default {
  name: "echarts",
  components: {
    // componentsLineChart   
  },
  props: {},
  data() {
    return {
      set: [
      { id: "1001", name: "dog", age: "10" },
      { id: "1003", name: "big", age: "12" },
      { id: "1002", name: "cat", age: "11" }
    ]
    };
  },
  beforeUpdate() {},
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    // 下载
    dow(data, filename) {
      console.log(data)
      if (!data) {
        alert("data is null");
        return;
      }
      if (!filename) filename = "json.json";
      if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
      }
      var blob = new Blob([data], { type: "text/json" });
      var e = document.createEvent("MouseEvents");
      var a = document.createElement("a");
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
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
      height: 3vw;
      font-size: 0.15rem;
      display: flex;
      align-items: center;
      img {
        height: 1.5vw;
      }
      span {
        display: block;
        height: 3vw;
        line-height: 3vw;
        margin-left: 1vw;
      }
    }
    section {
      height: 20vw;
      width: 100%;
    }
  }
  .LineChart {
    section {
      width: 100%;
      height: 20vw;
    }
  }
}
</style>
