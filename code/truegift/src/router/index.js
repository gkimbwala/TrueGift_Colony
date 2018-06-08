import Vue from 'vue'
import Router from 'vue-router'

import mainview from '@/views/mainview'
import challenges from '@/views/challenges'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainview',
      component: mainview
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: challenges
    }
  ]
})
