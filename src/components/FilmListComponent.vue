<template>
  <div>
    <ul>
      <list-item v-for="film in films" :film="film"></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from "./FilmListItemComponent.vue"

export default {
  name: "films-list",
  props: ["films"],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
