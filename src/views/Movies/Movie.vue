<template>
<div>
<div v-if="movie.title === '' || movie.title === null">Información no disponible.</div>
{{movie.title}}
</div>
<div>
<img v-if="movie.poster_path === null" src="../../assets/posterNotFound.jpg"/>
<img v-if="movie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"/>
</div>
Titulo original: 
            <div v-if="movie.original_title === '' || movie.original_title === null">Información no disponible.</div>
            <div>{{movie.original_title}}</div>
<br>
Dirección: <div v-if="!crew.length">Información no disponible.</div>
            <div v-for="member in crew" :key="member.id">
                <div v-if="member.job === 'Director'">{{member.name}}</div>
            </div>
<br>
Reparto:    <div v-if="!crew.length">Información no disponible.</div>
            <div v-for="actor in cast.slice(0,12)" :key="actor.id">{{actor.name}}</div>
<br>
Guión:      <div v-if="!crew.length">Información no disponible.</div>
            <div v-for="member in crew" :key="member.id">
                <div v-if="member.job === 'Writer' || member.job === 'Screenplay'">{{member.name}}</div>
            </div>
<br>
Música:     <div v-if="!crew.length">Información no disponible.</div>
            <div v-for="member in crew" :key="member.id">
                <div v-if="member.job === 'Original Music Composer' || member.job === 'Music'">{{member.name}}</div>
            </div>
<br>
Géneros:    <div v-if="!genres.length">Información no disponible.</div>
            <div v-for="genre in genres" :key="genre.id">{{genre.name}}</div>
<br>
Sinopsis:   <div v-if="movie.overview === '' || movie.overview === null">Información no disponible.</div>
            <div>{{movie.overview}}</div>
</template>

<script>
import { tmdb } from '../../services/httpService'

export default {
    name: 'single-movies',
    data: function(){
        return {
            movie: [],
            cast: [],
            crew: [],
            genres: []
        }
    },
    mounted () {
    const id = this.$route.params.id
    tmdb().get(`/movie/${id}?api_key=d3310fbf4f335e98b1d3009948c670d3&language=es-ES&append_to_response=similar,credits`)
    .then(response => (this.movie = response.data, 
                       this.cast = response.data.credits.cast,
                       this.crew = response.data.credits.crew,
                       this.genres = response.data.genres))
    }    
}
</script>