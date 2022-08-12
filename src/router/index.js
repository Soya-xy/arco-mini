import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '~/pages/index.vue'
import Test from '~/pages/selectTest.vue'
import dateTest from '~/pages/datetest.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/test', component: Test },
    { path: '/datetest', component: dateTest },
  ],
})

export default router
