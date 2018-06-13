import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({

  state,

  getters: {
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
    getSolutions: state => {
      return state.data.solutions
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
