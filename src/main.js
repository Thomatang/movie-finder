import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from "./store";
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
app.use(store)
app.mount('#app')