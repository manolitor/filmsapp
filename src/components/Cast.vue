<template>
<div class="table-responsive">
<h2>Reparto</h2>
<table class="table">
  <tbody>
      <div v-if="!cast.length">Información no disponible.</div>
      <td v-for="actor in cast.slice(0,12)" :key="actor.id">
        <router-link :to="{ name: 'castMovies', params: { id: actor.id, name: actor.name } }" >
        <img class="poster" v-if="actor.profile_path === null" src="../../assets/posterNotFound.jpg"/>
        <img class="poster" v-if="actor.profile_path !== null" :src="`https://image.tmdb.org/t/p/w200${actor.profile_path}`"/>
        </router-link>
      </td>
  </tbody>
</table>
</div>
</template>

<script>
import { tmdb } from '../services/httpService'

export default {
    name: 'cast',
    data: function(){
        return {
            cast: []
        }
    },
    mounted () {
     const id = this.$route.params.id
    tmdb().get(`/movie/${id}/credits?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES`)
    .then(response => (this.cast = response.data.cast))
    }    
}
</script>