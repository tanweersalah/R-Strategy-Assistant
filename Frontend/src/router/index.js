import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchResultView from "../views/SearchResultView.vue";
import DetailView from "../views/DetailView.vue";
import LearnMoreView from "../views/LearnMoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/search",
      name: "Search Result",
      component: SearchResultView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:vin?",
      name: "detail-view",
      component: DetailView,
      props: true,
    },
    {
      path: "/learn-more",
      name: "learn-more",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LearnMoreView,
    },
  ],
});

export default router;
