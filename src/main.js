// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd  from 'ant-design-vue';
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
// normalize.css（css样式初始化）
import 'normalize.css/normalize.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
