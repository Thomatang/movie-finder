<template>
  <div v-if="movies">
      <vueper-slides
        :visible-slides="4"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
      >
        <vueper-slide v-for="movie in moviesInDetail" :key="movie.imdbID" :title="movie.Title" :image="movie.Poster">
          <template v-slot:content>
            <div class="vueperslide__content-wrapper" style="flex-direction: row; align-items:flex-end;">
              <div class="movieInfo" style="display: flex; flex-direction:column; width:100%; background-color: #191919; color: white;">
              <span>{{movie.Title}}</span>
              <span>{{movie.Year}}</span>
              <span>{{movie.Director}}</span>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
      <div class="movies">
        <Movie v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
      </div>
  </div>
  <div v-else>Loading</div>
</template>
<script>
import Movie from './Movie.vue';
import { useStore } from 'vuex';
import { computed }  from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    name: 'MovieList',
    components: { Movie, VueperSlides, VueperSlide},
    setup() {
      const store= useStore()
      const movies = computed(function () {
        return store.getters.movies
      })

      const moviesInDetail = computed(function () {
        return store.getters.moviesInDetail
      })

      return {
        movies,
        moviesInDetail,
      }
    }
  }
</script>
<style>
.vueperslide__title {
  color: white;
}

.vueperslide__content {
  color: white;
}

.vueperslides {
  position: relative;
  margin: 40px;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.movies h2 {
  height: 56px;
}

.movies img {
  height: 308px;
}

.movieInfo {
  display: flex; 
  flex-direction:column; 
  width:100%; 
  background-color: #191919; 
  color: white;
}

@media screen and (max-width: 651px) {

  .vueperslides {
    position: relative;
    margin: 40px 0px;
}

  .movieInfo {
  visibility: hidden;
}
}
</style>