import Vue from "vue";
import VueRouter from "vue-router";
import Conversion from "../views/Conversion.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Conversion",
    component: Conversion
  },
  {
    path: "/history",
    component: History
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
