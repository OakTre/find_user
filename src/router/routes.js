export default [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/pages/Main')
    },
    {
        path: '/user/:id',
        name: 'User Profile',
        component: () => import('@/pages/UserProfile'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Page Not Found',
        component: () => import('@/pages/PageNotFound'),
        meta: {
            layout: 'AppLayoutError'
        }
    }
]