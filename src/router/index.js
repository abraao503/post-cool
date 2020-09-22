import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateAndEditPost from '../views/cadastrar/CreateAndEditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/publico/About.vue')
  },
  {
    path: '/createandeditpost',
    name: 'CreateAndEditPost',
    component: CreateAndEditPost
  }
  
]

const router = new VueRouter({
  routes
})

export default router
