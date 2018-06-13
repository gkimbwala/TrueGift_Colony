import devMain from '@/views/dev/main'
import task from '@/views/dev/tasks/task'

export default [
  {
    name: 'dev-main',
    path: '/dev',
    component: devMain
  },
  {
    name: 'task',
    path: '/task/:id',
    component: task,
    props: true
  }
]
