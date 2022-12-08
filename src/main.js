import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Cards from './components/Cards.vue'
import Asignar from './components/Asignar.vue'
import Game from './components/Game.vue'
import Game_pre from './components/Game_pre.vue'
import Board from './components/Board.vue'
import './assets/main.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "home", component: Login},
        {path: "/admin", name: "admin", component: Admin},
        {path: "/cards", name: "cards", component: Cards},
        {path: "/game", name: "game", component: Game},
        {path: "/game_pre/:id", name: "game_pre", component: Game_pre,  props: (route) => ({
            ...route.params
        })},   
        {path: "/asignar/:partida", name: "asignar", component: Asignar,  props: (route) => ({
            ...route.params
        })},        
        {path: "/column", name: "column", component: () => import('./components/column.vue')},
        {path: "/board", name: "board", component: Board}

    ]
});

createApp(App).use(router,VueAxios, axios).mount('#app')
