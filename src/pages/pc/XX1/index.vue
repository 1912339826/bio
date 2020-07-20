<template>
  <div id="XX1">
    <div class="left">
      <a-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange" />
      <a-directory-tree
        multiple
        default-expand-all
        @select="onSelect"
        @expand="onExpand"
        :default-selected-keys="['0-0-0-0']"
        :show-line="showLine"
        :show-icon="showIcon"
        :tree-data="treeData"
        :selectedKeys="selectedKeys"
        :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      ></a-directory-tree>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "XX1",
  components: {},
  props: {},
  data() {
    return {
      showLine: true,
      showIcon: false,
      treeData: [
        {
          title: "0-0",
          key: "0-0",
          children: [
            {
              title: "0-0-0",
              key: "0-0-0",
              children: [
                { title: "0-0-0-0", key: "0-0-0-0" },
                { title: "0-0-0-1", key: "0-0-0-1" },
                { title: "0-0-0-2", key: "0-0-0-2" }
              ]
            },
            {
              title: "0-0-1",
              key: "0-0-1",
              children: [
                { title: "0-0-1-0", key: "0-0-1-0" },
                { title: "0-0-1-1", key: "0-0-1-1" },
                { title: "0-0-1-2", key: "0-0-1-2" }
              ]
            },
            {
              title: "0-0-2",
              key: "0-0-2"
            }
          ]
        },
        {
          title: "0-1",
          key: "0-1",
          children: [
            { title: "0-1-0-0", key: "0-1-0-0" },
            { title: "0-1-0-1", key: "0-1-0-1" },
            { title: "0-1-0-2", key: "0-1-0-2" }
          ]
        },
        {
          title: "0-2",
          key: "0-2"
        }
      ],
      selectedKeys:[],
      expandedKeys:["0-1"],
      autoExpandParent:true
    };
  },
  created() {
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    // 选中...
    onSelect(keys, event) {
      console.log("Trigger Select", keys, event);
    },
    // 收起展开时...
    onExpand(keys, event) {
      // console.log("Trigger Expand",keys, event);
    },
    onChange(e) {
      let arr = [];
      arr.push(e.target.value)
      this.selectedKeys = arr;
    }
  },
  filters: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
#XX1 {
  width: 100%;
  background-color: #ece4d8;

  /deep/.ant-tree.ant-tree-directory
    > li.ant-tree-treenode-selected
    > span.ant-tree-node-content-wrapper::before {
    background-color: #7c334f;
  }
  /deep/.ant-tree.ant-tree-directory
    .ant-tree-child-tree
    > li.ant-tree-treenode-selected
    > span.ant-tree-node-content-wrapper::before {
    background-color: #7c334f;
  }
  /deep/.ant-tree.ant-tree-show-line li span.ant-tree-switcher {
    background-color: #ece4d8;
  }
  /deep/.ant-tree.ant-tree-directory
    .ant-tree-child-tree
    > li.ant-tree-treenode-selected
    > span.ant-tree-switcher {
    color: #7c334f;
  }
  .left {
    width: 20vw;
    background-color: #ece4d8;
    padding: 2vw;
    border: 2px dotted #dba638;
  }
  .right {
    padding: 2vw;
  }
}
</style>
