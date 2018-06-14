import mainView from '@/views/main'
import testComp from '@/views/test-comp'
import testId from '@/views/test-id'

import search from '@/modules/search/search'

export default [
  {
    name: 'main',
    path: '/',
    component: mainView
  },
  {
    name: 'test-comp',
    path: '/test',
    component: testComp
  },
  {
    name: 'test-id',
    path: '/test/:id',
    component: testId,
    props: true
  },
  {
    name: 'search',
    path: '/s',
    component: search
  }
]
