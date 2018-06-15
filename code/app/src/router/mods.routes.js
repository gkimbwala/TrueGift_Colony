import discourseMain from '@/modules/discourse/main'
import discourse from '@/modules/discourse/discourse'

import insightsMain from '@/modules/dynamics/insights/main'
import insights from '@/modules/dynamics/insights/insights'

// import discourseMain from '@/modules/discourse/main'
// import discourse from '@/modules/discourse/discourse'
//
// import discourseMain from '@/modules/discourse/main'
// import discourse from '@/modules/discourse/discourse'

export default [
  {
    path: '',
    component: discourseMain,
    props: true,
    children: [
      {
        name: 'discourse',
        path: 'discourse',
        component: discourse
      }
    ]
  },
  {
    path: '',
    component: insightsMain,
    props: true,
    children: [
      {
        name: 'insights',
        path: 'insights',
        component: insights,
        children: [
          {
            name: 'insights-challenge',
            path: 'challenge/:id',
            component: insights
          }
        ]
      }
    ]
  }
]
