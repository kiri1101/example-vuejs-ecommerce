import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./style.css";
import "../node_modules/nprogress/nprogress.css";
import Persistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(Persistedstate);

const app = createApp(App);

// app.use(createPinia());
app.use(pinia);
app.use(router);

app.mount("#app");
