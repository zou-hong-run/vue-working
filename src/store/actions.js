import { getAppName } from '@/api/app'
const actions = {
  updateAppName ({ commit }) {
    getAppName().then((data) => {
      commit('SET_APP_NAME', data)
    }).catch(err => {
      console.log(err)
    })
  }
}
export default actions
