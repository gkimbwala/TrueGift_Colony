import Vue from 'vue'
import Router from 'vue-router'

import mainRoutes from './main.routes.js'
import modsRoutes from './mods.routes.js'
import devRoutes from './dev.routes.js'
import repoRoutes from './repo.routes.js'
import userRoutes from './user.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  mainRoutes,
  modsRoutes,
  devRoutes,
  repoRoutes,
  userRoutes
)

export default new Router({
  mode: 'history',
  path: '/',
  routes
  // children: [
  //   {
  //     name: 'test-comp',
  //     path: '/test',
  //     component: testComp
  //   },
  //   {
  //     name: 'test-id',
  //     path: '/test/:id',
  //     component: testId,
  //     props: true
  //   }
  // ]
})
