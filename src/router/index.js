import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // PC端页面  ispc值为true
    {
      path: "/",
      redirect: 'home',
    },
    {
      path: "/home",
      name: 'home',
      component: home,
      // children: [{
      //   path: 'echarts',
      //   component: echarts,
      //   meta: {
      //     ispc: true
      //   }
      // }, ],

    },
  ]
})
