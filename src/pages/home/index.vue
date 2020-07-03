<template>
  <div id="home">
    <div @click="goq">1111</div>
  </div>
</template>
<script>
export default {
  name: "Resource",
  data() {
    return {};
  },
  methods: {
    goq(){
      this.$router.push('/set')
    }
  },
  created() {
    console.log(window.history)
  }
};
</script>


<style lang="less" scoped>
#home{
}
</style>