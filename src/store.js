import * as auth from './services/AuthService'
import { createStore } from "vuex";

export const store = createStore({
  state: {
    isLoggedIn: false,
    apiUrl: 'http://localhost:5000/api',
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn()
      if (state.isLoggedIn) {
        state.username = auth.getUsername()
        state.userId = auth.getUserId()
      } else {
        state.userId = null
        state.username = null
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate')
    }
  }
})