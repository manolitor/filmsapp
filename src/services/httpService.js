import { store } from '../store'
import axios from 'axios'

export function http(){
    return axios.create({
        baseURL: store.state.apiUrl
    })
}

export function tmdb(){
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3'
    })
}
