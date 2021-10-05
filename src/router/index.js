import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/Revision',
    name: 'Revision',
    component: () => import(/* webpackChunkName: "about" */ '../views/Revision.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/Copyright',
    name: 'Copyright',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copyright.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Acronymes',
    name: 'Acronymes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acronymes.vue')
  },
  {
    path: '/QCM_Acronymes',
    name: 'QCM_Acronymes',
    component: () => import(/* webpackChunkName: "about" */ '../views/QCM_Acronymes.vue')
  },
  {
    path: '/Reflexes',
    name: 'Reflexes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reflexes.vue')
  },
  {
    path: '/QCM_Reflexes',
    name: 'QCM_Reflexes',
    component: () => import(/* webpackChunkName: "about" */ '../views/QCM_Reflexes.vue')
  },
  {
    path: '/Juridique',
    name: 'Juridique',
    component: () => import(/* webpackChunkName: "about" */ '../views/Juridique.vue')
  },
  {
    path: '/QCM_Juridique',
    name: 'QCM_Juridique',
    component: () => import(/* webpackChunkName: "about" */ '../views/QCM_Juridique.vue')
  },
  {
    path: '/Incendie',
    name: 'Incendie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Incendie.vue')
  },
  {
    path: '/QCM_Incendie',
    name: 'QCM_Incendie',
    component: () => import(/* webpackChunkName: "about" */ '../views/QCM_Incendie.vue')
  },
  {
    path: '/Secourisme',
    name: 'Secourisme',
    component: () => import(/* webpackChunkName: "about" */ '../views/Secourisme.vue')
  },
  {
    path: '/QCM_Secourisme',
    name: 'QCM_Secourisme',
    component: () => import(/* webpackChunkName: "about" */ '../views/QCM_Secourisme.vue')
  },
  {
    path: '/Pictogrammes',
    name: 'Pictogrammes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pictogrammes.vue')
  },
]

const router = new VueRouter({
  routes
});

// fonction servant a vérifier si les identifiants sont bons, sinon retour sur la page home
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('Vous devez être connecté(e) pour atteindre cette page');
      next({
        path: '/Login',
      });
    }
  } else {
    next();
  }
});

export default router
