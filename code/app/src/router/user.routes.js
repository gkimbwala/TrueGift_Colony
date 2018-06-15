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
        name: 'user-activity',
        path: 'activity',
        component: userWorkflow
      },
      {
        name: 'user-insights',
        path: 'insights',
        component: userWorkflow
      },
      {
        name: 'user-tasks',
        path: 'tasks',
        component: userWorkflow
      },
      {
        name: 'user-workflow',
        path: 'workflow',
        component: userWorkflow
      }
    ]
  }
]
