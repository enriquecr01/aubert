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
                    component: Password
                },
                {
                    path: "/wifipassword",
                    component: WiFiPassword
                },
                {
                    path: "/notes",
                    component: Notes
                },
            ]
        },
        {
            path: "/login",
            component: Login
        }
    ]
});
