<template>

<div>
<MovieDetails/>
</div>

<div>
<Cast/>
</div>

<div>
<SimilarMovies/>
</div>

</template>

<script>
import SimilarMovies from '../../components/SimilarMovies.vue'
import Cast from '../../components/Cast.vue'
import MovieDetails from '../../components/MovieDetails.vue'

export default {
    name: 'single-movies',
    components: {
      SimilarMovies,
      Cast,
      MovieDetails
    },
    watch: {
       // call the method if the route changes
       '$route': {
         handler: 'asyncData',
         immediate: true, // runs immediately with mount() instead of calling method on mount hook 
        
       }
    } 
        
}
</script>
