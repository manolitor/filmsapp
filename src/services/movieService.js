import { tmdb } from './httpService'

export function getTrendingMovies() {
    return tmdb().get('/trending/movie/day?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES')
}

export function getUpcomingMovies() {
    return tmdb().get('/movie/upcoming?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES&page=1&region=ES')
}

export function getTopMovies() {
    return tmdb().get('/movie/top_rated?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES&page=1&region=ES')
}

export function getNowPlaying() {
    return tmdb().get('/movie/now_playing?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES&page=1&region=ES')
}