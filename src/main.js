import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/css/style.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import Home from './views/Home.vue'
import AllMovies from '@/views/Movies/AllMovies.vue'
import { store } from './store'

const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/movies', name: 'movies', component: AllMovies}
  ]

const router = createRouter({
    
history: createWebHashHistory(),
routes,
})

const app = createApp(App)

app
.use(router)
.use(store)
.mount('#app')
