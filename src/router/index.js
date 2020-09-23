import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import CreatePost from '../views/privado/CreatePost.vue'
import EditPost from '../views/privado/EditPost.vue'
import UserPost from '../views/privado/UserPost.vue'
import Home from '../views/publico/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/userpost',
    name: 'UserPost',
    component: UserPost
  }
  
]

const router = new VueRouter({
  routes
})

export default router
