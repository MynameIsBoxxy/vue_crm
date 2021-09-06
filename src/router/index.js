import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    meta: {
      layout: 'empty',
    },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    meta: {
      layout: 'empty',
    },
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/History.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/Record.vue')
  },


  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main', auth: true,
    },
    component: () => import('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const cUser = firebase.auth().currentUser

  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !cUser) {
    next('/login?message="login"')
  }else{
    next()
  }
})

export default router
