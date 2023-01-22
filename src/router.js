import { createRouter, createWebHistory } from "vue-router";
import Password from './pages/password.vue';
import Notes from './pages/notes.vue';
import WiFiPassword from './pages/wifi-password.vue';
import Login from './pages/login.vue';
import Landing from './pages/landing.vue';
import Register from './pages/register.vue';
import SessionFound from './pages/session-found.vue';
import Main from './main.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/password",
            component: Main,
            children: [
                {
                    path: "/password",
                    component: Password,
                    meta: { requiresAuth: true }
                },
                {
                    path: "/wifipassword",
                    component: WiFiPassword,
                    meta: { requiresAuth: true }
                },
                {
                    path: "/notes",
                    component: Notes,
                    meta: { requiresAuth: true }
                },
            ],

        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/",
            component: Landing
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/session-found",
            component: SessionFound
        },
    ]
});

router.beforeEach((to, from) => {
    let id = localStorage.getItem('id');

    console.log("XDDDD", from)

    if (to.fullPath === '/login' || to.fullPath === '/') {
        if (id !== null) {
            router.push('/session-found')
        }
    }

    if (to.meta.requiresAuth) {
        if (id === null) {
            router.push('/login')
        }
    }

    if (from.fullPath === "/") {
        if (to.meta.requiresAuth) {
            if (id !== null) {
                router.push('/session-found')
            }
        }
    }


}) 
