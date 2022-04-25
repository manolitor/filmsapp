<template>

</template>

<script>
import { tmdb } from '../../services/httpService'

export default {
    name: 'single-movies',
    data: function(){
        return {
            movie: null
        }
    },
    mounted () {
    const id = this.$route.params.id
    tmdb().get(`/movie/${id}?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES`)
    .then(response => (this.movie = response.data))
  }
}
</script>