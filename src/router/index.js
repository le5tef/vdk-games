import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ninja',
    name: 'Ninja',
    component: () => import('../views/Ninja.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
