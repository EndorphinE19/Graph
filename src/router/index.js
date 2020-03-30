import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lineG',
    name: 'LineG',
    component: () => import('../views/LineG.vue')
  },
  {
    path: '/pie',
    name: 'Pie',
    component: () => import('../views/Pie.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
