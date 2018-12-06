import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false
  },
  mutations: {
    toggle (state) {
      state.show=!state.show
    }
  }
})
