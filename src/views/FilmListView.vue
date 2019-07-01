<template>
  <div>
    <film-detail :film="selectedFilm"></film-detail>
    <films-list :films="films"></films-list>
  </div>
</template>

<script>
import FilmListComponent from "@/components/FilmListComponent.vue"
import FilmDetail from "@/components/FilmDetails.vue"
import {eventBus} from "@/main.js"

export default {
  name: "films",
  props: ["films"],
  components: {
    "films-list": FilmListComponent,
    "film-detail": FilmDetail
  },
  data () {
    return {
      selectedFilm: []
    }
  },
  mounted () {
    eventBus.$on('film-selected', (film) => this.selectedFilm = film)
  }
}
</script>

<style lang="css" scoped>
</style>
