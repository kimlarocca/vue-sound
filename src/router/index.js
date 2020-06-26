import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Vue HiFi | An accessible audio player built with Vue.js',
      layout: 'default'
    },
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // page titles
  if (to.meta.title) {
    document.title = to.meta.title
    document.description = to.meta.description
  }
  next()
})

export default router
