import "./assets/main.css";

import { createApp } from "vue";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router";
import authentication from "./services/Authentication";
import MockService from "./services/MockService";
import { AUTH_ENABLED } from "./services/const";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(router);
app.use(Quasar, {
  plugins: {},
});

var auth = new authentication();

app.provide("authentication", auth);
app.provide("mockService", MockService);

app.config.globalProperties.$authProperties = {
  loginReachable: false,
  isAuthorized: false,
  authEnabled: AUTH_ENABLED,
};

auth.keycloakInit(app);
