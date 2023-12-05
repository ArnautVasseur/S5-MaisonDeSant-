import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404View.vue'
import SemellesOrthopediquesView from '../views/SemellesOrthopediquesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404', 
      name: 'NotFound', 
      component: NotFound
    },
    {
        path: '/:catchAll(.*)', redirect:'404'
    },
    {
      path: '/semelles-orthopediques', 
      name: 'SemellesOrthopediques', 
      component: SemellesOrthopediquesView
    },
  ]
})

export default router
