import repoMain from '@/views/repo/main'
import challenge from '@/objects/challenges/challenge'
import solution from '@/objects/solutions/solution'

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
  }
]
