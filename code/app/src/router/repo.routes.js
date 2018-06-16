import repoMain from '@/views/repo/main'

import challengeMain from '@/objects/challenges/main'
import challenges from '@/objects/challenges/challenges'
import challenge from '@/objects/challenges/challenge'
import challengeNav from '@/objects/challenges/nav'

import discourse from '@/modules/discourse/discourse'
import insights from '@/modules/dynamics/insights/insights'
import overview from '@/modules/dynamics/overview'
import people from '@/modules/dynamics/people/main'

import modelMain from '@/objects/models/main'
import models from '@/objects/models/models'
import model from '@/objects/models/model'
import modelNav from '@/objects/models/nav'

import projectMain from '@/objects/projects/main'
import projects from '@/objects/projects/projects'
import project from '@/objects/projects/project'
import projectNav from '@/objects/projects/nav'

import blueprintMain from '@/objects/blueprints/main'
import blueprints from '@/objects/blueprints/blueprints'
import blueprint from '@/objects/blueprints/blueprint'
import blueprintNav from '@/objects/blueprints/nav'

import courseMain from '@/objects/courses/main'
import courses from '@/objects/courses/courses'
import course from '@/objects/courses/course'
import courseNav from '@/objects/courses/nav'

import jobs from '@/objects/jobs/sub'
import lessons from '@/objects/lessons/sub'

import tasks from '@/objects/tasks/sub'

export default [
  {
    path: '/repo',
    component: repoMain,
    children: [
      {
        name: 'repo-main', // add a Featured page here + Emergencies + Opportunities
        path: ''
      },
      // Challenge Routes
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
          },
          {
            name: 'challenge',
            path: '/challenge/:id',
            components: {
              default: challenge,
              'challenge-nav': challengeNav
            },
            children: [
              {
                name: 'challenge-discourse',
                path: 'discourse',
                component: discourse
              },
              {
                name: 'challenge-insights',
                path: 'insights',
                component: insights
              },
              {
                name: 'challenge-overview',
                path: 'overview',
                component: overview
              },
              {
                name: 'challenge-people',
                path: 'people',
                component: people
              },
              {
                name: 'challenge-models',
                path: 'models',
                component: models
              },
              {
                name: 'challenge-projects',
                path: 'projects',
                component: projects
              },
              {
                name: 'challenge-tasks',
                path: 'tasks',
                component: tasks
              }
            ]
          }
        ]
      },
      // Model Routes
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
          },
          {
            name: 'model',
            path: '/model/:id',
            components: {
              default: model,
              'model-nav': modelNav
            },
            children: [
              {
                name: 'model-discourse',
                path: 'discourse',
                component: discourse
              },
              {
                name: 'model-insights',
                path: 'insights',
                component: insights
              },
              {
                name: 'model-overview',
                path: 'overview',
                component: overview
              },
              {
                name: 'model-people',
                path: 'people',
                component: people
              },
              {
                name: 'model-blueprints',
                path: 'blueprints',
                component: blueprints
              },
              {
                name: 'model-tasks',
                path: 'tasks',
                component: tasks
              }
            ]
          }
        ]
      },
      // Blueprint Routes
      {
        name: 'repo-blueprints',
        path: '',
        component: blueprintMain,
        children: [
          {
            name: 'blueprints',
            path: 'blueprints',
            component: blueprints,
            props: true
          },
          {
            name: 'blueprint',
            path: '/blueprint/:id',
            components: {
              default: blueprint,
              'blueprint-nav': blueprintNav
            },
            children: [
              {
                name: 'blueprint-discourse',
                path: 'discourse',
                component: discourse
              },
              {
                name: 'blueprint-insights',
                path: 'insights',
                component: insights
              },
              {
                name: 'blueprint-overview',
                path: 'overview',
                component: overview
              },
              {
                name: 'blueprint-people',
                path: 'people',
                component: people
              },
              {
                name: 'blueprint-courses',
                path: 'courses',
                component: courses
              },
              {
                name: 'blueprint-tasks',
                path: 'tasks',
                component: tasks
              }
            ]
          }
        ]
      },
      // Course Routes
      {
        name: 'repo-courses',
        path: '',
        component: courseMain,
        children: [
          {
            name: 'courses',
            path: 'courses',
            component: courses,
            props: true
          },
          {
            name: 'course',
            path: '/course/:id',
            components: {
              default: course,
              'course-nav': courseNav
            },
            children: [
              {
                name: 'course-discourse',
                path: 'discourse',
                component: discourse
              },
              {
                name: 'course-insights',
                path: 'insights',
                component: insights
              },
              {
                name: 'course-overview',
                path: 'overview',
                component: overview
              },
              {
                name: 'course-people',
                path: 'people',
                component: people
              },
              {
                name: 'course-lessons',
                path: 'lessons',
                component: lessons
              },
              {
                name: 'course-tasks',
                path: 'tasks',
                component: tasks
              }
            ]
          }
        ]
      },
      // Project Routes
      {
        name: 'repo-projects',
        path: '',
        component: projectMain,
        children: [
          {
            name: 'projects',
            path: 'projects',
            component: projects,
            props: true
          },
          {
            name: 'project',
            path: '/project/:id',
            components: {
              default: project,
              'project-nav': projectNav
            },
            children: [
              {
                name: 'project-discourse',
                path: 'discourse',
                component: discourse
              },
              {
                name: 'project-insights',
                path: 'insights',
                component: insights
              },
              {
                name: 'project-overview',
                path: 'overview',
                component: overview
              },
              {
                name: 'project-people',
                path: 'people',
                component: people
              },
              {
                name: 'project-jobs',
                path: 'jobs',
                component: jobs
              },
              {
                name: 'project-tasks',
                path: 'tasks',
                component: tasks
              }
            ]
          }
        ]
      }
    ]
  }
]
