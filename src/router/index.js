import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
import set from '../pages/set/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  },
  {
    path:'/set',
    name:'set',
    component:set
  }
]
})
