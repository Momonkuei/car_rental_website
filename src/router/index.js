import { createRouter, createWebHistory } from 'vue-router'
import ProductLists from '@/views/page/ProductLists.vue'
import ProductDetail from '../views/page/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'ProductLists' }
    },
    {
      path: '/products_lists',
      name: 'ProductLists',
      component: ProductLists
    },
    {
      path: '/products_detail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})

export default router
