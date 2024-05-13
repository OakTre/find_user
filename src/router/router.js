import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

import loadLayoutMiddleware from './middleware/loadLayout'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
