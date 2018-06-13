import storeMain from '@/views/store/main'
import item from '@/views/store/items/item'

export default [
  {
    name: 'store-main',
    path: '/store',
    component: storeMain
  },
  {
    name: 'item',
    path: '/item/:id',
    component: item,
    props: true
  }
]
