import Vue from 'vue'
import Router from 'vue-router'
import pc from '../pages/pc/index.vue'
import echarts from '../pages/pc/echarts/index.vue'
import XX1 from '../pages/pc/XX1/index.vue'
import phone from '../pages/phone/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // PC端页面  ispc值为true
    {
      path: "/pc",
      name: 'pc',
      component: pc,
      meta: {
        ispc: true
      },
      children: [{
        path: 'echarts',
        component: echarts,
        meta: {
          ispc: true
        }
      }, {
        path: 'XX1',
        component: XX1,
        meta: {
          ispc: true
        }
      }],
      redirect: '/pc/echarts',
    },
    // 手机端页面 ispc值为false
    {
      path: "/phone",
      name: 'phone',
      component: phone,
      meta: {
        ispc: false
      },
    }
  ]
})
