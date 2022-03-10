import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './login'
import page from './page'
import shop from './shop'
Vue.use(VueRouter)

const routes = [
  ...login,
  ...page,
  ...shop
]


console.log(routes);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
