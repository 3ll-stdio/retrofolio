import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import ProjectDetails from "./views/ProjectDetails.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/projects/:id", component: ProjectDetails },
];
