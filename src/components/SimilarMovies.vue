<template>
    <div class="table-responsive">
<h2>Películas similares</h2>
<table class="table">
  <tbody>
      <td v-for="similar in similars" :key="similar.id">
        <router-link :to="{ name: 'movie', params: { id: similar.id } }">
        <img class="poster" v-if="similar.poster_path === null" src="../assets/posterNotFound.jpg"/>
        <img class="poster" v-if="similar.poster_path !== null" :src="`https://image.tmdb.org/t/p/w200${similar.poster_path}`"/>
        </router-link>
      </td>      
  </tbody>
</table>
</div>
</template>

<script>
import { tmdb } from '../services/httpService'

export default {
    name: 'similar-movies',
    data: function(){
        return {
            similars: []
        }
    },
    mounted () {
     const id = this.$route.params.id
    tmdb().get(`/movie/${id}/similar?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES`)
    .then(response => (this.similars = response.data.results))
    }    
}
</script>