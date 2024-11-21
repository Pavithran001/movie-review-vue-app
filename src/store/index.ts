import { createStore } from 'vuex'
import type { InjectionKey } from 'vue'

// Define your state type
interface State {
  count: number
  // Add other state properties here
}

// Define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
    // Add other state properties here
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
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})

export default store 