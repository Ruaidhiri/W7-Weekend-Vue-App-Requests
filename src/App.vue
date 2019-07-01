<template>
  <div id="app">
    <router-view :films="films"></router-view>
  </div>
</template>

<script>
import {eventBus} from "./main.js"


export default {
  name: "app",
  data () {
    return {
      films: [],
    }
  },
  mounted () {
    fetch("https://ghibliapi.herokuapp.com/films/")
    .then(res => res.json())
    .then(data => this.films = data)
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
