<template>
  <div id="shiyan">
    <a-collapse default-active-key="1" :bordered="true">
      <template #expandIcon="props">
        <a-icon
          type="right"
          :rotate="props.isActive ? 90 : 0"
          :style="{ color: '#dba638',fontSize:'0.8rem',fontWeight: 900}"
        />
      </template>
      <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
        <p>11111</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "shiyan",
  components: {},
  props: {},
  data() {
    return {
      customStyle:
        "background: #fff6e9;border-radius: 4px;border: 1vw;overflow: hidden;padding:2vw"
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
</style>


