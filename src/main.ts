import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.ts";
import App from "./App.vue";
import "./style.scss";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount(".app");
