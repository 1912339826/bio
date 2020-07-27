import Vue from 'vue'
import Router from 'vue-router'
import pc from '../pages/pc/index.vue'
import echarts from '../pages/pc/echarts/index.vue'
import XX1 from '../pages/pc/XX1/index.vue'
import XX2 from '../pages/pc/XX2/index.vue'
import XX3 from '../pages/pc/XX3/index.vue'
import XX4 from '../pages/pc/XX4/index.vue'
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
      redirect: '/pc/XX1',
      children: [
        // {
        //   path: 'echarts',
        //   component: echarts,
        //   meta: {
        //     ispc: true
        //   }
        // }, 
        {
          path: 'XX1',
          name:"XX1",
          component: XX1,
          meta: {
            ispc: true
          }
        }, {
          path: 'XX2',
          name:"XX2",
          component: XX2,
          meta: {
            ispc: true
          }
        },
        {
          path: 'XX3',
          name:"XX3",
          component: XX3,
          meta: {
            ispc: true
          }
        },
        {
          path: 'XX4',
          name:"XX4",
          component: XX4,
          meta: {
            ispc: true
          }
        }
      ],
     
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
