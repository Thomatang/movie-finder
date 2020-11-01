import {createStore} from 'vuex';

const API_KEY = 'a5549d08';

const store = createStore({
    state: {
        movies: [],
        moviesInDetail: [],
        searchTerm: '',
        loading: false
    },
    mutations: {
        setMovies: (state, payload) => {
            state.movies = payload;
        },
        setMoviesInDetail: (state, payload) => {
            state.moviesInDetail.push(payload);
        },
        emptyMovieList: (state) => {
            state.movies = [];
        },
        emptyMoviesInDetail: (state) => {
            state.moviesInDetail = [];
        },
        setLoadingStatus: (state, payload) => {
            state.loading = payload
        },
        setSearchTerm: (state, payload) => {
            state.searchTerm = payload
        }
    },
    actions: {
        getMovies: ({commit}, payload) => {
            commit("setLoadingStatus", true);
            const SEARCH_MOVIES_API_URL = `https://www.omdbapi.com/?s=${payload}&apikey=${API_KEY}`;

            fetch(SEARCH_MOVIES_API_URL)
                .then(response => response.json())
                .then(jsonResponse => {
                    commit("setMovies", jsonResponse.Search);
                    if (jsonResponse.Search) {
                        jsonResponse.Search.forEach(movie => {
                            store.dispatch("getSingleMovieInformation", movie.Title)
                        })
                    }
                    commit("setLoadingStatus", false);
                });
        },
        getSingleMovieInformation: ({commit}, payload) => {
            commit("setLoadingStatus", true);
            const SINGLE_MOVIE_API_URL = `https://www.omdbapi.com/?t=${payload}&apikey=${API_KEY}`;

            fetch(SINGLE_MOVIE_API_URL)
                .then(response => response.json())
                .then(jsonResponse => {
                    commit("setMoviesInDetail", jsonResponse);
                    commit("setLoadingStatus", false);
                });
        },
        emptyMovieList: ({commit}) => {
            commit("emptyMovieList");
        },
        emptyMoviesInDetail: ({commit}) => {
            commit("emptyMoviesInDetail");
        },
        setSearchTerm: ({commit}, payload) => {
            commit("setSearchTerm", payload);
        },
        setLoadingStatus: ({commit}, payload) => {
            commit("setLoadingStatus", payload);
        },
    },
    getters: {
        movies: state => state.movies,
        moviesInDetail: state => state.moviesInDetail,
        loading: state => state.loading,
        searchTerm: state => state.searchTerm
    }
});

export default store;