<template>
  <div id="Head">
    <div class="left">
      <div class="box">
        <hello :dataIndex="changeIndex" @change="change" />
      </div>
    </div>
    <div class="content">
      <div
        v-for="(item, index) in tab"
        :key="index"
        @click="change(index)"
        :class="changeIndex==index?'active':''"
      >{{item.name}}</div>
    </div>
    <div class="headPortrait">
      <img :src="imgchange" alt @click="imgs" />
    </div>
    <a-modal
      v-model="visible"
      title="选择"
      @ok="handleOk"
      cancelText="取消"
      :destroyOnClose="true"
      okText="确认"
    >
      <section style="height:auto">
        <a-radio-group v-model="value" @change="onChange">
          <a-radio
            :style="radioStyle"
            :value="item"
            v-for="(item, index) in headPortrait.headPortrait"
            :key="index"
          >
            <img :src="item.url" alt style="height:5vw" />
          </a-radio>
        </a-radio-group>
      </section>
    </a-modal>
  </div>
</template>

<script>
import headPortrait from "../../static/json/headPortrait.json";
import hello from "./echarts/HelloWorld";
export default {
  name: "Head",
  components: {
    hello
  },
  props: {},
  data() {
    return {
      // 此name与路由中name对应
      tab: [
        { name: "echarts" },
        { name: "XX1" },
        { name: "XX2" },
        { name: "XX3" }
      ],
      changeIndex: 0,
      visible: false,
      headPortrait: "",
      value: "",
      radioStyle: {
        display: "block",
        height: "6vw",
        lineHeight: "6vw"
      },
      imgchange: ""
    };
  },
  created() {
    this.headPortrait = headPortrait;
    for (
      let index = 0;
      index < this.headPortrait.headPortrait.length;
      index++
    ) {
      const element = this.headPortrait.headPortrait[index];
      if (element.change) {
        this.value = element;
        this.imgchange = this.value.url;
      }
    }
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    change(index) {
      // 防止重复点击.
      if (this.changeIndex != index) {
        this.changeIndex = index;
        if (this.$route.fullPath != this.tab[index].name) {
          this.$router.push(`/pc/${this.tab[index].name}`);
        }
      }
    },
    imgs() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      this.value.change = true;
      this.headPortrait.headPortrait[this.value.index].change = true;
      this.imgchange = this.value.url;
    },
    onChange() {}
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#Head {
  border-bottom: 2px dotted #dba638;
  height: 7vw;
  background-color: #ece4d8;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    height: 7vw;
    line-height: 3vw;
    text-align: center;
    width: 10%;
    font-weight: 900;
    font-size: 1.5rem;
    .box {
      border-right: 2px dotted #dba638;
      width: 100%;
    }
  }
  .content {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    div {
      &:hover {
        color: #7c334f;
        cursor: pointer;
        font-weight: 900;
      }
    }
    .active {
      color: #7c334f;
      font-weight: 900;
    }
  }
  .headPortrait {
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px dotted #dba638;
    img {
      height: 70%;
    }
  }
}
</style>
