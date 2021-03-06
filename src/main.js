import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from '@/lib/bus'
// 开发环境才使用
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.config.productionTip = false
Vue.prototype.$bus = bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
