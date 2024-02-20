import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HelloWorld.vue') // 建议进行路由懒加载，优化访问性能
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router