import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      // redirect: 'home/',
    },
    {
      path: "/home",
      name: 'home',
      component: home,
      children: [],

    },
  ]
})
