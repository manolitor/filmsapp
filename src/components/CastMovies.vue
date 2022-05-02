<template>

<h2>Películas donde sale {{this.$route.params.name}}</h2>
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
    name: 'cast-movies',
    data: function(){
        return {
            movies: []
        }
    },
    mounted () {
     const id = this.$route.params.id
    tmdb().get(`/person/${id}/movie_credits?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES`)
    .then(response => (this.movies = response.data.cast))
    }    
}
</script>