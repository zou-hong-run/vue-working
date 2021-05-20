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
// render: h => {
  //   return h('div',{
  //    'class': 'count-up wrapper',
  //    'class': ['count-to',true,false]
  //    'class': {'count-to': 1!=1}
  //     attrs: {
  //       id: 'box'
  //     },
  //     style: {
  //       color: 'pink'
  //     },
  //     props: {
  //       endVal: 100
  //     },
  //     domProps: {
  //      innerHTML: '123'
  //     },
  //     on:{
  //       '内部发送的事件': (val) => {
  //        console.log('animation end')
  //     },
  //     directives: [],//自定义指令
  //     slot: 'default',
  //     scopedSlots: 'default',
  //     key: '',
  //     ref: ''
  //  },
  //  nativeOn: {
  //    'click': () => {
  //      console.log('click!!')
  //    }
  //  }
  //   },"renderfunction")
  // }
