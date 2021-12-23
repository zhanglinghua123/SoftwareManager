import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "../views/User"
import World from "../views/World";
import Amercian from "../components/Graph/Amercian";
import Home1 from "../views/Home1";
import Home2 from "../views/Home2";
import Home3 from "../views/Home3";
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home1',
    component: Home1,
  },
  {
    path:"/home2",
    name:'Home2',
    component: Home2,
  },
  {
    path:"/home3",
    name:'Home3',
    component: Home3,
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
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
