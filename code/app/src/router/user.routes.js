import user from '@/user/main'
import userActivity from '@/user/activity'
import userNetwork from '@/user/network'
import userProfile from '@/user/profile'
import userStats from '@/user/stats'
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
        component: userActivity
      },
      {
        name: 'user-network',
        path: 'network',
        component: userNetwork
      },
      {
        name: 'user-profile',
        path: 'profile',
        component: userProfile
      },
      {
        name: 'user-stats',
        path: 'stats',
        component: userStats
      },
      {
        name: 'user-workflow',
        path: 'workflow',
        component: userWorkflow
      }
    ]
  }
]
