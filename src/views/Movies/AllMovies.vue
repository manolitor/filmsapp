<template>
<div id="upcommingMovies">
    <h2>Populares esta semana</h2>
    <div class="upcommingMovies__tile">
      <router-link
        v-for="result in results"
        :key="result.id"
        :to="`/detail/${result.id}`"
        class="upcommingMovies__link"
        draggable="false"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w200${result.poster_path}`"
          :alt="result.name || result.title"
          :title="result.name || result.title"
          class="upcommingMovies__poster"
          loading="lazy"
          draggable="false"
        />
        <span class="upcommingMovies__name">
          {{ result.title }}
        </span>
      </router-link>
    </div>
  </div>

</template>

<script>

import * as movieService from '../../services/movieService'

export default {
    name: 'movies-all',
    data: function(){
        return {
            results: null
        }
    },
    beforeRouteEnter (to, from, next) {
        movieService.getTrendingMovies()
        .then(res => {
            next(vm => {
                vm.results = res.data.results
                console.log(vm.results)
            })
        })
    }
}

</script>

<style lang="scss" scoped>
.upcommingMovies {
  &__tile {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #404040;
    }
  }
  &__link {
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: all 50ms ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  &__poster {
    width: 190px;
    height: 285px;
    &:hover {
      border: 2px solid;
    }
  }
  &__name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    text-align: center;
    text-shadow: 1px 1px 0 #404040;
    background-color: rgba(#000, 0.2);
  }
}
</style>