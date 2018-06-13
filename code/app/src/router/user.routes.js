import user from '@/user/main'

export default [
  {
    name: 'user',
    path: '/u/:id',
    component: user,
    props: true
  }
]
