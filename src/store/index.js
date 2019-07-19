import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  specialty_id: ''
}
const mutations = {
  changeSpecialty(state, channel) {
    state.specialty_id = channel
  }
}
const actions = {
  changeSpecialty(context, channel) {
    context.commit('changeSpecialty', channel)
  }
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})
export default store