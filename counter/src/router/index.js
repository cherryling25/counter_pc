import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: () =>
         import("../views/Home.vue"),
         children: [
            {
              path: "/counter",
              name: "counter",
              component: () => import('../components/counter.vue')
            },
            {
              path: "/rawMaterial",
              name: "rawMaterial",
              component: () => import('../components/rawMaterial.vue')
            },
            {
              path: "/materialManage",
              name: "materialManage",
              component: () => import('../components/materialManage.vue')
            }
         ]
    }
  ]
})
