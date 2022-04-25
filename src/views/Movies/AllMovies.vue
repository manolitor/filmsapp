<template>
<div>
  <TrendingMovies/>
</div>
<br>
<div>
  <NowPlaying/>
</div>
<br>
<div>
  <UpcomingMovies/>
</div>
<br>
<div>
  <TopMovies/>
</div>

</template>

<script>
import UpcomingMovies from '../../components/UpcomingMovies.vue'
import TrendingMovies from '../../components/TrendingMovies.vue'
import TopMovies from '../../components/TopMovies.vue'
import NowPlaying from '../../components/NowPlaying.vue'

export default {
    name: 'movies-all',
    components: {
        TrendingMovies,
        NowPlaying,
        UpcomingMovies,
        TopMovies        
    }
}
</script>