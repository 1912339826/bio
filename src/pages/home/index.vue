<template>
  <div id="home">
    <div class="sidebar">
      <div class="head">
        <img :src="headPortrait.snipaste.url" alt="" />
        <p>啦啦啦啦</p>
      </div>
      <div class="lists">
        <div
          :class="'list'"
          @click="rou(item.url, index)"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="swimming1" :id="item.active">
            <div class="swimming2">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="right">
      <transition
        name="fade"
        appearmmm
        enter-active-class="animate__animated animate__fadeIn"
      >
        <router-view></router-view>
      </transition>
    </div>
    <!-- appear-active-class="animate__animated animate__backInLeft" -->
    <!-- enter-active-class="animate__animated animate__backInLeft" -->
  </div>
</template>

<script>
import headPortrait from "./headPortrait.json";
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {
      headPortrait: {},
      loading: true,
      list: [
        { url: "childrens_one", active: "", name: "1" },
        { url: "childrens_two", active: "", name: "2" },
      ],
    };
  },
  created() {
    console.log(this.$route);

    this.headPortrait = headPortrait;
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    rou(url, index) {
      for (let index = 0; index < this.list.length; index++) {
        let element = this.list[index];
        element.active = "";
      }
      this.list[index].active = "active";
      this.$router.push(url);
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#home {
  display: flex;
  .sidebar {
    font-size: 0.2rem;
    height: 100vh;
    width: 8vw;
    background-color: rgb(231, 231, 231);
    border-top-right-radius: 3vw;
    -moz-box-shadow: 1px 0px 11px #333333;
    -webkit-box-shadow: 1px 0px 11px #333333;
    box-shadow: 1px 0px 11px #333333;
    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 10vw;
      img {
        height: 5vw;
        width: 5vw;
      }
      p {
        font-size: 0.05rem;
      }
    }
  }

  #right {
    padding-left: 2vw;
  }
  .lists {
    margin-top: 3vw;
    padding-left: 1vw;
    width: 100%;
    .list {
      font-size: 0.1rem;
      width: 4vw;
      text-align: center;
      color: #0a090994;
      margin-bottom: 2vw;
      .swimming1 {
        position: relative;
        width: 4vw;
        height: 4vw;
        padding: 1vw;
        margin: 0 auto;
        background: #fff;
        border-radius: 50%;
        box-shadow: 8px 8px 70px -20px #0c84e7a2 inset;
        .swimming2 {
          font-size: 0.1rem;
          text-align: center;
          position: absolute;
          width: 3vw;
          height: 3vw;
          line-height: 3vw;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background: #fff;
          border-radius: 50%;
          box-shadow: 4px 4px 35px -6px #0c84e7a2;
        }
        &:hover {
          box-shadow: 4px 4px 35px -6px #0c84e7 inset;
          .swimming2 {
            box-shadow: 4px 4px 35px -6px #0c84e7;
          }
        }
      }
    }

    #active {
      // -moz-box-shadow: 2px 2px 20px -15px chartreuse;
      // -webkit-box-shadow: 2px 2px 20px -15px chartreuse;
      box-shadow: 4px 4px 35px -6px #0c84e775 inset;
      .swimming2 {
        box-shadow: 4px 4px 35px -6px #0c84e775;
        background-color: #0b6fc00e;
      }
    }
  }
}
</style>
