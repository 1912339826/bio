<template>
  <div id="app">
    <!-- <table border="1" style="border-collapse: collapse">
      <caption>这是标题</caption>
      <tr>
        <th colspan="3">本站代号</th>
        <th colspan="4">201</th>
        <th colspan="3">本站呼号</th>
        <th colspan="3">北京</th>
      </tr>
      <tr>
        <td colspan="2">本站节点号</td>
        <td colspan="3">2001</td>
        <td colspan="2">路由方式</td>
        <td colspan="2">转发</td>
        <td colspan="2">集团军代号</td>
        <td colspan="2">901</td>
      </tr>
      <tr>
        <td rowspan="3">接力机编号</td>
        <td colspan="2">2001-1</td>
        <td rowspan="3">对方呼号</td>
        <td>重庆</td>
        <td rowspan="3">对方节点</td>
        <td>3002</td>
        <td rowspan="3">天线极化方式</td>
        <td>水平</td>
        <td rowspan="3">群路模式</td>
        <td>混合</td>
        <td rowspan="3">是否启动前纠</td>
        <td>启动</td>
      </tr>
      <tr>
        <td colspan="2">2001-2</td>
        <td>成都</td>
        <td>3003</td>
        <td>垂直</td>
        <td>混合</td>
        <td>启动</td>
      </tr>
      <tr>
        <td colspan="2">2001-3</td>
        <td>南京</td>
        <td>3004</td>
        <td>水平</td>
        <td>纯电路</td>
        <td>启动</td>
      </tr>
      <tr>
        <th colspan="13">接力机参数</th>
      </tr>
      <tr>
        <td colspan="3" rowspan="2">参数类型</td>
        <td colspan="4">2001-1</td>
        <td colspan="3">2001-2</td>
        <td colspan="3">2001-3</td> 
      </tr>
      <tr>
        <td colspan="2">主用</td>
        <td>备一</td>
        <td>备二</td>
        <td>主用</td>
        <td>备一</td>
        <td>备二</td>
        <td>主用</td>
        <td>备一</td>
        <td>备二</td>
      </tr>
      <tr>
        <td colspan="2" rowspan="2">工作频率(MHz)</td>
        <td>收</td>
        <td colspan="2"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>发</td>
        <td colspan="2"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="3">速率(kbps)</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">本地勤务地址码</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">对方勤务地址码</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">勤务发密钥号</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">勤务收密钥号</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">发扩频码</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="3">收扩频码</td>
        <td colspan="4"></td>
        <td colspan="3"></td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="13" style="letter-spacing:20px">交换机IP通道参数</td>
      </tr>
      <tr>
        <td colspan="2">自治系统号</td>
        <td colspan="2">01</td>
        <td colspan="2">节点IP地址</td>
        <td colspan="2">2.0.0.1/32</td>
        <td colspan="2">节点路由协议</td>
        <td colspan="3">FRP</td>
      </tr>
      <tr>
        <td colspan="2" rowspan="2">以太网1</td>
        <td colspan="2">IP地址</td>
        <td colspan="2">20.1.1.1/24</td>
        <td colspan="3" rowspan="2">以太网2</td>
        <td colspan="2">IP地址</td>
        <td colspan="2">20.1.2.1/24</td>
      </tr>
      <tr>
        <td colspan="2">路由协议</td>
        <td colspan="2">FRP</td>
        <td colspan="2">路由协议</td>
        <td colspan="2">FRP</td>
      </tr>
      <tr>
        <td colspan="13">交换机用户通道参数</td>
      </tr>
      <tr>
        <td colspan="2">通道号及模式</td>
        <td colspan="2">用户电话号码</td>
        <td colspan="2">通道号及模式</td>
        <td colspan="2">用户电话号码</td>
        <td colspan="2">通道号及模式</td>
        <td colspan="3">用户电话号码</td>
      </tr>
      <tr>
        <td colspan="2">1</td>
        <td colspan="2"></td>
        <td colspan="2">11</td>
        <td colspan="2"></td>
        <td colspan="2">21</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">2</td>
        <td colspan="2"></td>
        <td colspan="2">12</td>
        <td colspan="2"></td>
        <td colspan="2">22</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">3</td>
        <td colspan="2"></td>
        <td colspan="2">13</td>
        <td colspan="2"></td>
        <td colspan="2">23</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">4</td>
        <td colspan="2"></td>
        <td colspan="2">14</td>
        <td colspan="2"></td>
        <td colspan="2">24</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">5</td>
        <td colspan="2"></td>
        <td colspan="2">15</td>
        <td colspan="2"></td>
        <td colspan="2">25</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">6</td>
        <td colspan="2"></td>
        <td colspan="2">16</td>
        <td colspan="2"></td>
        <td colspan="2">26</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">7</td>
        <td colspan="2"></td>
        <td colspan="2">17</td>
        <td colspan="2"></td>
        <td colspan="2">27</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">8</td>
        <td colspan="2"></td>
        <td colspan="2">18</td>
        <td colspan="2"></td>
        <td colspan="2">28</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">9</td>
        <td colspan="2"></td>
        <td colspan="2">19</td>
        <td colspan="2"></td>
        <td colspan="2">29</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td colspan="2">10</td>
        <td colspan="2"></td>
        <td colspan="2">20</td>
        <td colspan="2"></td>
        <td colspan="2">30</td>
        <td colspan="3"></td>
      </tr>
      <tr><td colspan="13">执行XXX</td></tr>
      <tr><td colspan="13">备注:</td></tr>
    </table>-->
    <!-- <div class="box">
      <div class="left">
        <p
          v-for="(item, index) in txt"
          :key="index"
          @click="Mchange(index)"
          :class="active==index?'active':''"
        >{{item.name}}</p>
      </div>
      <div class="right">{{txt[active].content}}</div>
    </div> -->
  </div>
</template>

<script>
import aa from "../static/aa";
import loadFile from "../src/assets/js/TXT";
export default {
  name: "App",
  components: {},
  data() {
    return {
      active: 0,
      html: "",
      txt: [],
      name: ""
    };
  },
  created() {
    // this.TextProcessing();
  },
  mounted() {},
  methods: {
    Mchange(index) {
      this.active = index;
    },
    TextProcessing() {
      let data = loadFile("../../../static/测试.txt");
      let arr = data.replace(/\r/g, "").split("\n");
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (
          element.length < 20 &&
          element.length > 4 &&
          element.substr(1, 1) == "第"
        ) {
          this.txt.push({ name: element, content: "" });
          arr[index] = "^%^%^%^%";
        }
      }
      let a = arr.join("");
      let b = a.split("^%^%^%^%");
      this.name = b[0];
      for (let index = 0; index < this.txt.length; index++) {
        const element = this.txt[index];
        element.content = b[index + 1];
      }
    }
  }
};
</script>

<style lang="less">
// less外部文件的使用
// @import url('./assets/less/index');
#app {
  width: 100%;
  table {
    width: 100%;
    text-align: center;
  }
  .box {
    width: 100%;
    display: flex;
    .left {
      height: 50vw;
      overflow: scroll;
      width: 15%;
      p {
        border-top: 1px solid rgb(183, 202, 202);
        border-bottom: 1px solid rgb(154, 160, 160);
        height: 2vw;
        line-height: 2vw;
        &:hover {
          cursor: pointer;
        }
      }
      .active {
        background-color: aliceblue;
      }
    }
    .right {
      width: 85%;
      line-height: 2vw;
      padding: 1vw;
      height: 50vw;
      overflow: scroll;
      font-size: 1rem;
      text-indent: 2rem;
    }
  }
}
</style>
