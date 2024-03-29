import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import sourceData from '@/data.json';

const routes = [
    {
        path: "/", name: "home", component: Home
    },
    {
        path: '/protected',
        name: 'protected',
        component: () => import("@/views/ProtectedMe.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/invoices',
        name: 'invoices',
        component: () => import("@/views/Invoices.vue"),
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination',
        component: () => import('@/views/Destination.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter: (to, from) => {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id));

            if (!exists) {
                return {
                    name: 'NotFound',
                    params: { pathMatch: to.path.split('/').slice(1) },
                    query: to.query,
                    hash: to.hash
                };
            }
        },
        children: [
            {
                path: '/experience/:id/:experienceSlug',
                name: 'experience',
                component: () => import('@/views/Experience.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) })
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("@/views/NotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0 }), 300);
        });
    }
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.username) {
        return { name: 'login', query: {redirect: to.fullPath} };
    }
});

export default router
