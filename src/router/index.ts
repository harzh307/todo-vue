import { createRouter, createWebHistory } from "vue-router";
import TodoViewVue from "@/views/TodoView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => TodoViewVue,
    },
  ],
});

export default router;
