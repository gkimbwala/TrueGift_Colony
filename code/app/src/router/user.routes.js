import user from '@/user/main'
import userWorkflow from '@/user/workflow'

export default [
  {
    name: 'user',
    path: '/:name',
    component: user,
    props: true,
    children: [
      {
        name: 'user-workflow',
        path: 'workflow',
        component: userWorkflow
      }
    ]
  }
]
