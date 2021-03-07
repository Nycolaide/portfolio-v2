import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

//views
import Home from "../views/Home.vue";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/home",
    component: Homepage,
    name: "Homepage",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
