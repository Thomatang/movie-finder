import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

import MovieList from './components/MovieList'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/movies', component: MovieList }
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')