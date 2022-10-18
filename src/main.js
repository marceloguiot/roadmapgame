import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import './assets/main.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "home", component: Login},
        {path: "/admin", name: "admin", component: Admin}
    ]
});

createApp(App).use(router,VueAxios, axios).mount('#app')
