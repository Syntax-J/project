const state={
  count: 0
}
const mutations = {
  add0(state){
    state.count++;
  }
}
const getters= {
   show0: state => {
     return state.count
   }
 }

export default{
  state,
  getters,
  mutations
}
