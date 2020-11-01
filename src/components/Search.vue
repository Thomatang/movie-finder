<template>
  <form class="search">
    <input
        type="text"
        :value="movieTitle"
        @keyup="handleChange"
        placeholder="Search for your movie by title here..."
    />
    <input @click="handleSubmit" type="submit" value="SEARCH"/>
  </form>
</template>

<script>
import {useRouter} from 'vue-router';
import {ref} from 'vue';

export default {
  name: 'Search',
  props: ['search'],
  setup(props, {emit}) {
    const router = useRouter()
    const movieTitle = ref(props.search)
    return {
      movieTitle,
      handleSubmit(event) {
        event.preventDefault();
        emit('search', movieTitle.value);
        router.push('/movies');
      },
      handleChange(event) {
        movieTitle.value = event.target.value
      }
    }
  }
};
</script>
<style>
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
}

input[type="submit"] {
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 18%;
  margin-left: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #282c34;
  color: antiquewhite;
}

.search > input[type="text"] {
  width: 80%;
  min-width: 170px;
}

@media screen and (max-width: 651px) {
  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 100%;
    margin-left: 5px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }

  .search > input[type="text"] {
    width: 100%;
    min-width: 170px;
  }
}
</style>