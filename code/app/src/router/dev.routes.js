import devMain from '@/views/dev/main'
import task from '@/objects/tasks/task'
import createTask from '@/objects/tasks/actions/create-task'

import devActivity from '@/modules/activity/main'
import devInsights from '@/views/dev/dashboard/insights'
import devTasks from '@/objects/tasks/main'

export default [
  {
    path: '/dev',
    component: devMain,
    children: [
      {
        name: 'dev-activity',
        path: 'activity',
        component: devActivity
      },
      {
        name: 'dev-insights',
        path: 'insights',
        component: devInsights
      },
      {
        name: 'dev-tasks',
        path: 'tasks',
        component: devTasks
      },
      {
        name: 'create-task',
        path: 'task/create',
        component: createTask
      }
    ]
  },
  {
    name: 'task',
    path: '/task/:id',
    component: task,
    props: true
  }
]
