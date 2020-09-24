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
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost,
    meta: { requiresAuth: true }
  },
  {
    path: '/editpost',
    name: 'EditPost',
    component: EditPost,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/userpost',
    name: 'UserPost',
    component: UserPost,
    meta: { requiresAuth: true }
  }
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth
    )) {
    let id = localStorage.getItem('id');
    if(!id) {
      next({
        name: "Login"
      });
    } else {
      next();
    }
  } else {
    next();
  } 
});

export default router
