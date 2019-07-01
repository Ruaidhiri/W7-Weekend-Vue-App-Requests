import Vue from "vue";
import Router from "vue-router";
import Films from "@/views/FilmListView"

Vue.use(Router);

const router = new Router ({
  routes: [
    {
      path: "",
      name: "films",
      component: Films
    }
  ]
});

export default router;
