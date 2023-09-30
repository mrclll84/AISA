import { createRouter, createWebHistory } from 'vue-router'
import ConfiguratorPage from '../views/ConfiguratorPage.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ConfiguratorPage
  },
  {
    path: '/about',
    name: 'about',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
