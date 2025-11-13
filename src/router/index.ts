import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrAboutView from '../views/FrAboutView.vue'

const routes = [
  {
    path: '/', // The default "home" page
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about', // Your new page
    name: 'About',
    component: FrAboutView
  }
]

const router = createRouter({
  history: createWebHistory(), // This uses normal URLs
  routes
})

export default router