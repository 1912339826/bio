<template>
  <div id="music">
    
  </div>
</template>

<script>
import music_list from '../../../static/music/music.json'
export default {
  name: "music",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {
      console.log(music_list)
  },
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
#music {
}
</style>
