import devMain from '@/views/dev/main'

import devActivity from '@/modules/activity/main'
import devInsights from '@/views/dev/dashboard/insights'
import devTasks from '@/objects/tasks/main'

import taskSub from '@/objects/tasks/sub'
import task from '@/objects/tasks/task'
import createTask from '@/objects/tasks/actions/create-task'

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
        path: 'tasks',
        component: devTasks,
        children: [
          {
            name: 'dev-tasks',
            path: '',
            component: taskSub
          }
        ]
      }
    ]
  },
  {
    name: 'create-task',
    path: '/create',
    component: createTask
  },
  {
    name: 'task',
    path: '/task/:id',
    component: task,
    props: true
  }
]
