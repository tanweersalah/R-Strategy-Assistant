import { REDIRECT_URI, INIT_OPTIONS } from "@/services/const";

import Keycloak from "keycloak-js";

export default class Authentication {
  constructor() {
    this.keycloak = new Keycloak(INIT_OPTIONS);
  }

  keycloakInit(app) {
    var authProperties = app.config.globalProperties.$authProperties;

    if (!authProperties.authEnabled) {
      authProperties.loginReachable = false;
      authProperties.isAuthorized = false;
      app.config.globalProperties.$authProperties = authProperties;
      app.mount("#app");
    } else {
      this.keycloak
        .init({ onLoad: INIT_OPTIONS.onLoad })
        .then((auth) => {
          if (!auth) {
            window.location.reload();
            sessionStorage.setItem("splashScreenShown", "false");
          } else {
            // Check if the refresh token is valid and authenticated

            if (this.keycloak.tokenParsed) {
              authProperties.loginReachable = true;
            }
            authProperties.isAuthorized = true;
          }
          app.config.globalProperties.$authProperties = authProperties;
          app.mount("#app");
          localStorage.setItem("authStatus", "logged_in");
          window.addEventListener("storage", (event) => {
            if (event.key === "authStatus" && event.newValue === "logged_out") {
              this.logout();
            }
          });
          //Token Refresh
          setInterval(() => {
            this.updateToken(60, app);
          }, 60000);
        })
        .catch((e) => {
          console.log(e);
          authProperties.loginReachable = false;
          authProperties.isAuthorized = false;
          app.config.globalProperties.$authProperties = authProperties;
          app.mount("#app");
        });
    }
  }

  getAccessToken() {
    return this.keycloak.token;
  }

  getRefreshedToken() {
    return this.keycloak.refreshToken;
  }

  updateToken(minimumValidity, app) {
    this.keycloak
      .updateToken(minimumValidity)
      .then((refreshed) => {
        if (refreshed) {
          // Check if the refresh token is valid and authenticated
          if (this.keycloak.parsedToken) {
            app.config.globalProperties.$authProperties.loginReachable = true;
          } else {
            app.config.globalProperties.$authProperties.loginReachable = false;
          }
          app.config.globalProperties.$authProperties.isAuthorized = true;

          console.info("Token refreshed " + refreshed);
        } else {
          console.warn(
            "Token not refreshed, valid for " +
              Math.round(
                this.keycloak.tokenParsed.exp +
                  this.keycloak.timeSkew -
                  new Date().getTime() / 1000
              ) +
              " seconds"
          );
        }
      })
      .catch(() => {
        console.error("updateToken -> Failed to refresh token");
      });
  }

  isUserAuthenticated() {
    return this.keycloak.authenticated;
  }
  getClientId() {
    return this.keycloak.clientId;
  }
  getUserName() {
    return this.keycloak.tokenParsed.email;
  }
  getName() {
    return this.keycloak.tokenParsed.name;
  }

  logout() {
    let logoutOptions = { redirectUri: REDIRECT_URI };
    this.keycloak
      .logout(logoutOptions)
      .then((success) => {
        console.log("--> log: logout success ", success);
        sessionStorage.setItem("splashScreenShown", "false");
        app.config.globalProperties.$authProperties.isAuthorized = false;
        if (localStorage.getItem("authStatus") === "logged_in") {
          localStorage.setItem("authStatus", "logged_out");
        }
      })
      .catch((error) => {
        console.log("--> log: logout error ", error);
      });
  }
}
