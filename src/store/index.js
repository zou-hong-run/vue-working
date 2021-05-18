import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getter'
import user from './module/user'
// 插件
import saveInLocal from '../store/plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [
    saveInLocal
  ]
})
