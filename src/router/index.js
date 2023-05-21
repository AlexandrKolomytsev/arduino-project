import Vue from 'vue'
import VueRouter from 'vue-router'
import Reports from '../views/Reports.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Reports',
    component: Reports,
    meta: { requiresAuth: true }
  },
  {
    path: '/conditioning',
    name: 'Conditioning',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Conditioning.vue')
  },
  {
    path: '/lighting',
    name: 'Lighting',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Lighting.vue')
  },
  {
    path: '/heating',
    name: 'Heating',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Heating.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Guide.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuth) {
    console.log(store.state, 'store')
    // Если маршрут требует аутентификации и пользователь не авторизован,
    // перенаправляем на страницу входа или на другую страницу, где можно выполнить аутентификацию.
    next('/auth');
  } else {
    // Если пользователь авторизован или маршрут не требует аутентификации, продолжаем нормальное выполнение перехода.
    next();
  }
});

export default router
