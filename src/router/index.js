import Vue from 'vue'
import VueRouter from 'vue-router'
import Reports from '../views/Reports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/conditioning',
    name: 'Conditioning',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Conditioning.vue')
  },
  {
    path: '/lighting',
    name: 'Lighting',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lighting.vue')
  },
  {
    path: '/heating',
    name: 'Heating',
    component: () => import(/* webpackChunkName: "about" */ '../views/Heating.vue')
  },
  {
    path: '/watering',
    name: 'Watering',
    component: () => import(/* webpackChunkName: "about" */ '../views/Watering.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
