import Vue from 'vue'
import VueRouter from 'vue-router'
import { setTitle } from '../lib/util'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
const HAS_LOGINED = true
// 路由前置守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED)next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED)next('/home')
    else next()
  }
})
// router.beforeResolve
// 路由后置守卫
router.afterEach((to, from) => {
  // logining = false
})
export default router
