import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/ModuleA'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
    toggle:false,
    global:0,
    count2:0,
}
export default new Vuex.Store({
  state,
  mutations,
  modules:{
    moduleA
  }
})
