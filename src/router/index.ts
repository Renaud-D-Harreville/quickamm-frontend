import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/', // The default "home" page
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about', // Your new page
    name: 'About',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(), // This uses normal URLs
  routes
})

export default router