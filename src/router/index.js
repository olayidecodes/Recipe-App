import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe/:slug',
    name: 'RecipeView',
    component: () => import('../views/RecipeView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
