<template>
  <div id="Aside">
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
export default {
  name: "Aside",
  components: {},
  props: {},
  data() {
    return {
      visible: false,
      value: "",
      headPortrait: "",
      imgchange: "",
      radioStyle: {
        display: "block",
        height: "6vw",
        lineHeight: "6vw"
      }
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
#Aside {
  background-color: #ece4d8;
  .headPortrait {
    height: 7vw;
    line-height: 7vw;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dotted #dba638;
    border-top: none;
    img {
      height: 70%;
    }
  }
}
</style>
