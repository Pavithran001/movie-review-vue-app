import { createStore } from 'vuex'

interface State {
  count: number
}

export default createStore<State>({
  state: {
    count: 0
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
}) 