import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/quiz/:number",
      name: "quiz",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Quiz.vue")
    },
    {
      path: "/summary",
      name: "summary",
      component: () => import("./views/Summary.vue")
    }
  ]
});
