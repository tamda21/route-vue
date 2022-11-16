import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Family from '../views/family/Family.vue'
import FamilyInfo from '../views/family/FamilyInfo.vue'
import NotFound from '../views/family/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  }, 
  {
    path:'/family',
    name:'family',
    component:Family
  },
  {
    path:'/family/:id',
    name:'FamilyInfo',
    component:FamilyInfo
  },
  //redirect 
  {
    path:'/AllFamilly',
    redirect:'/'
  },
  //catch route
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
