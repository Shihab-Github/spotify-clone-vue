import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  createRouter,
  createWebHistory,
} from "vue-router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import Home from './views/Home.vue'
import Library from './views/Library.vue'

import "./style.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

//ROUTES
const routes = [{ path: "/", component: Home }, {path:"/library", component: Library}];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
