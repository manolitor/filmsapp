<template>

    <h2 v-if="movies.length != 0">Películas realacionadas con la busqueda: {{this.$route.params.query}}</h2>
    <h2 v-if="movies.length == 0" >La busqueda no arrojó ningún resultado.</h2>
    
    <table>
  <tbody>
      <th v-for="movie in movies" :key="movie.id" class="poster-container">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }">
        <img class="poster" v-if="movie.poster_path === null" src="../assets/posterNotFound.jpg"/>
        <img class="poster" v-if="movie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"/>
        </router-link>
      </th>      
  </tbody>
</table>
    </template>

<script>
    import { tmdb } from '../services/httpService'

export default {
    name: 'search-movies',
    data: function(){
        return {
            movies: []
        }
    },
    mounted () {
     const query = this.$route.params.query
    tmdb().get(`/search/movie?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES&query=${query}&page=1&include_adult=false`)
    .then(response => (this.movies = response.data.results))
    }    
}
    </script>