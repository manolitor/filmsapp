import { tmdb } from './httpService'

export function getTrendingMovies() {
    return tmdb().get('/trending/movie/day?api_key=d3310fbf4f335e98b1d3009948c670d3')
}