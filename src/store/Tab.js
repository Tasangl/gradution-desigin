export default {
  state: {
    isCollapse: false
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    /*  collapseMenu ({ commit }) {
      commit('collapseMenu')
    } */
  }
}
