import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("./views/Home.vue") },
  { path: "/about", name: "about", component: () => import("./views/About.vue") },
  { path: "/projects", name: "projects", component: () => import("./views/Projects.vue") },
  {
    path: "/projects/:id",
    name: "project-details",
    component: () => import("./views/ProjectDetails.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export default routes;
