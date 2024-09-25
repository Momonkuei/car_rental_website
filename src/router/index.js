import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products_detail',
      components: {
        default: () => import('../views/page/ProductDetail.vue')
      }
    }
  ]
})

export default router
