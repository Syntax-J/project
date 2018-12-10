const state = {
        count:0
}
const mutations = {
    increment : state => state.count++
} 
const actions = {
    add({ state, commit, rootState }){commit('globalAdd',null,{ root: true })}
} 
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }