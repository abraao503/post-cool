import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '../views/privado/CreatePost.vue'
import EditPost from '../views/privado/EditPost.vue'

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
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/editpost',
    name: 'EditPost',
    component: EditPost
  },
  {
    path: '/userpost',
    name: 'UserPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/privado/UserPost.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
