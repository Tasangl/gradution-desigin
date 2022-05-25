import Vue from 'vue'
import Vuex from 'vuex'
import Tab from './Tab'
import user from './user'
import light from './light'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    Tab,
    user,
    light
  }
})
