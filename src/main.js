// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// normalize.css（css样式初始化）
import 'normalize.css/normalize.css'
import TXT from "./assets/js/TXT.js"
Vue.prototype.$txt = TXT;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
echarts.dataTool = require("echarts/extension-src/dataTool/gexf");
Vue.prototype.$echarts = echarts
Vue.prototype.$dataTool = echarts.dataTool;
import 'echarts/theme/macarons.js'
// https://www.bbsmax.com/A/x9J2bn8gJ6/
import animated from 'animate.css' // npm install animate.css --save安装，在引入
// https://animate.style/                                                                                                                                                                                                                                                                                                                                                              
Vue.use(animated)  //https://www.cnblogs.com/fang-1207/p/animationfang.html
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
const Bus = new Vue()
new Vue({
  el: '#app',
  router,
  data: {
     Bus
     // 在子组件中通过this.$root.Bus.$on(); this.$root.Bus.$emit()来调用
  },
  components: {
    App
  },
  template: '<App/>'
})
