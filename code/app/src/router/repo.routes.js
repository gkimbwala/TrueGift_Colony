import repoMain from '@/views/repo/main'
import challenge from '@/objects/challenges/challenge'
import solution from '@/objects/solutions/solution'
import project from '@/objects/projects/project'
import blueprint from '@/objects/blueprints/blueprint'
import course from '@/objects/courses/course'

export default [
  {
    name: 'repo-main',
    path: '/repo',
    component: repoMain
  },
  {
    name: 'challenge',
    path: '/challenge/:id',
    component: challenge,
    props: true
  },
  {
    name: 'solution',
    path: '/solution/:id',
    component: solution,
    props: true
  },
  {
    name: 'project',
    path: '/project/:id',
    component: project,
    props: true
  },
  {
    name: 'blueprint',
    path: '/blueprint/:id',
    component: blueprint,
    props: true
  },
  {
    name: 'course',
    path: '/course/:id',
    component: course,
    props: true
  }
]
