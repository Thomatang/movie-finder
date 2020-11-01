<template>
  <header class="App-header">
    <h2>{{ title }}</h2>
    <p class="intro">Seek and you shall find</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
  setup() {
  }
}
</script>

<style>
.App-header {
  background-color: rgb(30, 29, 29);
  color: white;
  font-size: 60px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #ffcd00;
  width: 70%;
  margin: 0;
}

.intro {
  font-size: large;
  background: linear-gradient(to bottom right, #ffcd00, #fff);
  color: black;
}

@media screen and (max-width: 651px) {
  .App-header {
    width: 100%;
    margin-bottom: 0;
    font-size: 30px;
  }
}
</style>