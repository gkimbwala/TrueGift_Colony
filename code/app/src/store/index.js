import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({

  state,

  getters: {
    getUser: state => {
      return state.data.user
    },
    getTests: state => {
      return state.data.tests
    },
    getTasks: state => {
      return state.data.tasks
    },
    getItems: state => {
      return state.data.items
    },
    getChallenges: state => {
      return state.data.challenges
    },
    getChallengeByID: (state, i) => {
      if (state.data.challenges[i] === this.i) {
        return state.data.challenges[i]
      }
    },
    getModels: state => {
      return state.data.models
    },
    getProjects: state => {
      return state.data.projects
    }
  },

  actions: { // = methods
  },

  mutations: { // = functions
  },

  modules: {
  }
})
