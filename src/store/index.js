import Vue from 'vue'
import Vuex from 'vuex'
import timer from './modules/timer'
import timer0 from './modules/timer0'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    timer,timer0
  }
})
