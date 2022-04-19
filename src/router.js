import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/authentication/Login.vue'
import Register from '@/views/authentication/Register.vue'
import AllMovies from '@/views/Movies/AllMovies.vue'
import Home from '@/views/Home.vue'

Vue.useAttrs(Router)

export default new Router({
    router: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/movies',
            name: 'all-movies',
            component: AllMovies
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})