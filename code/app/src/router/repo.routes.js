import repoMain from '@/views/repo/main'

import challengeMain from '@/objects/challenges/main'
import challenges from '@/objects/challenges/challenges'
import challenge from '@/objects/challenges/challenge'

import modelMain from '@/objects/models/main'
import models from '@/objects/models/models'
import model from '@/objects/models/model'

import projectsMain from '@/objects/projects/main'
import projects from '@/objects/projects/projects'
import project from '@/objects/projects/project'

export default [
  {
    path: '/repo',
    component: repoMain,
    children: [
      {
        name: 'repo-main', // add a Featured page here + Emergencies + Opportunities
        path: ''
      },
      {
        name: 'repo-challenges',
        path: '',
        component: challengeMain,
        children: [
          {
            name: 'challenges',
            path: 'challenges',
            component: challenges,
            props: true
          }
        ]
      },
      {
        name: 'challenge',
        path: '/challenge/:id',
        component: challenge
      },
      {
        name: 'repo-models',
        path: '',
        component: modelMain,
        children: [
          {
            name: 'models',
            path: 'models',
            component: models,
            props: true
          }
        ]
      },
      {
        name: 'model',
        path: '/model/:id',
        component: model
      },
      {
        name: 'repo-projects',
        path: '',
        component: projectsMain,
        children: [
          {
            name: 'projects',
            path: 'projects',
            component: projects,
            props: true
          }
        ]
      },
      {
        name: 'project',
        path: '/project/:id',
        component: project
      }
    ]
  }
]
