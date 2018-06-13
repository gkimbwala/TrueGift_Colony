import repoMain from '@/views/repo/main'
import challenge from '@/views/repo/challenges/challenge'

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
  }
]
