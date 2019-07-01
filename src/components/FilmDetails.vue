<template>
  <div v-if='film'>
    <h3>{{film.name}}</h3>
    <p>Year: {{film.release_date}}</p>
    <p>Description: {{film.description}}</p>
  </div>
</template>

<script>
import {eventBus} from "../main.js";

export default {
  name: "film-detail",
  props: ["film"]
}
</script>

<style lang="css" scoped>
</style>
