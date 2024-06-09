import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import authentication from "./services/Authentication";

const app = createApp(App);

app.use(router);

var auth = new authentication();

app.provide("authentication", auth);

app.config.globalProperties.$authProperties = {
  loginReachable: false,
  isAuthorized: false,
};

auth.keycloakInit(app);
