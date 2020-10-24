<template>
    <div class="movies">
      <Movie v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
    </div>
</template>
<script>
import Movie from './Movie.vue';
  export default {
    name: 'MovieList',
    components: { Movie },
    setup() {}
  }
</script>