import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  specialty_id: ''
}
const mutations = {
  changeSpecialty(state, specialty) {
    state.specialty_id = specialty
  }
}
const actions = {
  changeSpecialty(context, specialty) {
    context.commit('changeSpecialty', specialty)
  }
}
const store = new Vuex.Store({
  state,
  actions,
  mutations
})
export default store