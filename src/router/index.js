import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "../views/User"
import World from "../views/World";
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path:"/World",
    name:"World",
    component: World,
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
