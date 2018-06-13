import Vue from 'vue'
import Router from 'vue-router'

import mainRoutes from './main.routes.js'
import devRoutes from './dev.routes.js'
import opsRoutes from './ops.routes.js'
import repoRoutes from './repo.routes.js'
import storeRoutes from './store.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  mainRoutes,
  devRoutes,
  opsRoutes,
  repoRoutes,
  storeRoutes
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
