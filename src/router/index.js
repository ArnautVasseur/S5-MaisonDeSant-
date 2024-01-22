import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from "../lib/supabaseClient.js";
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404View.vue'
import SemellesOrthopediquesView from '../views/SemellesOrthopediquesView.vue'
import TraitementView from '../views/TraitementView.vue'
import NousConnaitreView from '../views/NousConnaitreView.vue'
import DevisView from '../views/DevisView.vue'
import CharteView from '../views/CharteView.vue'
import AuthView from '../views/Admin/AuthentificationView.vue'
import DatabaseView from '../views/Admin/DatabaseView.vue'

let localUser;

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
    {
      path: '/traitement', 
      name: 'Traitement', 
      component: TraitementView
    },
    {
      path: '/nous-connaitre', 
      name: 'NousConnaitre', 
      component: NousConnaitreView
    },
    {
      path: '/faire-devis', 
      name: 'Devis', 
      component: DevisView
    },
    {
      path: '/charte-confidentialite', 
      name: 'Charte', 
      component: CharteView
    },
    {
      path: '/authentification', 
      name: 'Authentification', 
      component: AuthView
    },
    {
      path: '/database', 
      name: 'Database', 
      component: DatabaseView,
      meta: { requiresAuth: true },
    },
  ],
})

async function getUser(next) {
  localUser = await supabase.auth.getSession();
  if (localUser.data.session == null || localUser.data.session == undefined) {
    next("/authentification");
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
});

export default router