<template>
<div class="table-responsive">
<h2>Próximos estrenos</h2>
<table class="table">
  <tbody>
      <td v-for="result in results" :key="result.id">
        <img class="poster" v-if="result.poster_path === null" src="../assets/posterNotFound.jpg"/>
        <img class="poster" v-if="result.poster_path !== null" :src="`https://image.tmdb.org/t/p/w200${result.poster_path}`"/>
      </td>
  </tbody>
</table>
</div>

</template>

<script>
import * as movieService from '../services/movieService'

export default {
    name: 'upcoming-movies',
    data: function(){
        return {
            results: null
        }
    },
    mounted () {
    movieService.getUpcomingMovies()
    .then(response => (this.results = response.data.results))
  }
}
</script>