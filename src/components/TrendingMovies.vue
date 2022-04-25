<template>
<div class="table-responsive">
<h2>Populares esta semana</h2>
<table class="table">
  <tbody>
      <td v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }">
        <img class="poster" v-if="movie.poster_path === null" src="../assets/posterNotFound.jpg"/>
        <img class="poster" v-if="movie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"/>
        </router-link>
      </td>
      
  </tbody>
</table>
</div>

</template>

<script>
import * as movieService from '../services/movieService'

export default {
    name: 'trending-movies',
    data: function(){
        return {
            movies: null
        }
    },
    mounted () {
    movieService.getTrendingMovies()
    .then(response => (this.movies = response.data.results))
  }
}
</script>