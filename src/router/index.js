import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import Test from '~/pages/test.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/test', component: Test },
  ],
})

export default router
