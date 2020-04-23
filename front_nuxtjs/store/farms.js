import api from '~/services/api'

export default {
  state: () => ({
    farms: []
  }),
  mutations: {
    SET_FARMS (state, farms) {
      state.farms = farms
      // console.log(farms)
    }
  },
  actions: {
    async farms ({ commit }) {
      commit('SET_FARMS', await api.farms())
    }
  }
}
