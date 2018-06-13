import opsMain from '@/views/ops/main'
import userComp from '@/views/ops/user-comp'
import userId from '@/views/ops/user-id'

export default [
  {
    name: 'ops-main',
    path: '/ops',
    component: opsMain
  },
  {
    name: 'user-comp',
    path: '/user',
    component: userComp
  },
  {
    name: 'user-id',
    path: '/user/:id',
    component: userId,
    props: true
  }
]
