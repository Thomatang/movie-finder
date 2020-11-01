<template>
  <div class="app">
    <Header :title="'taxi cinema'"/>
    <Search :search="searchTerm" @search="handleSearch"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
  name: 'app',
  components: {Header, Search},
  setup() {
    const store = useStore()
    const movies = computed(function () {
      return store.getters.movies
    })

    const loading = computed(function () {
      return store.getters.loading
    })
    const searchTerm = computed(function () {
      return store.getters.searchTerm
    })

    const moviesInDetail = computed(function () {
      return store.getters.moviesInDetail
    })

    return {
      movies,
      moviesInDetail,
      loading,
      searchTerm,
      handleSearch(searchTerm) {
        store.dispatch("setLoadingStatus", false);
        store.dispatch("setSearchTerm", searchTerm);
        store.dispatch("emptyMovieList");
        store.dispatch("emptyMoviesInDetail");
        store.dispatch("getMovies", searchTerm);
      }
    };
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom right, #ffcd00, #fff);
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif
}

.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
}

@media screen and (min-width: 694px) and (max-width: 915px) {
  .movie {
    max-width: 33%;
  }
}

@media screen and (min-width: 652px) and (max-width: 693px) {
  .movie {
    max-width: 50%;
  }
}

@media screen and (max-width: 651px) {
  .movie {
    max-width: 100%;
    margin: auto;
  }
}
</style>