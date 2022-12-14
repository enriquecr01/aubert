import { createRouter, createWebHistory } from "vue-router";
import Password from './pages/password.vue';
import Notes from './pages/notes.vue';
import WiFiPassword from './pages/wifi-password.vue';
import Login from './pages/login.vue';
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
        }
    ]
});

router.beforeEach((to) => {
    let id = localStorage.getItem('id');

    if (to.fullPath === '/login') {
        if (id !== null) {
            router.push('/password')
        }
    }

    if (to.meta.requiresAuth) {
        if (id === null) {
            router.push('/login')
        }
    }
}) 
