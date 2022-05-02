import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@/assets/css/style.scss'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import Home from './views/Home.vue'
import AllMovies from '@/views/Movies/AllMovies.vue'
import Movie from '@/views/Movies/Movie.vue'
import { store } from './store'
import * as auth from './services/AuthService'
import SimilarMoviesVue from './components/SimilarMovies.vue'
import CastMovies from './components/CastMovies.vue'

const routes = [
    { path: '/', name: 'home', component: Home, 
      beforeEnter: (to, from, next) => {      
        if (auth.isLoggedIn()) {
          next('/movies')
        } else {
          next()
        }
      }
    },
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/movies', name: 'movies', component: AllMovies},
    { path: '/movie/:id', name: 'movie', component: Movie },
    { path: '/similar/:id', name: 'similars', component: SimilarMoviesVue },
    { path:'/movies/:id/:name', name: 'castMovies', component: CastMovies}
  ]

const router = createRouter({
history: createWebHashHistory(),
routes
})

const app = createApp(App)

app
.use(router)
.use(store)
.mount('#app')
