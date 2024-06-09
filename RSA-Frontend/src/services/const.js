const IDP_URL = "http://keycloak:8080/";
const REDIRECT_URI = "http://localhost:5173/";
const CLIENT_ID = "miw_public";
const REALM = "miw_test";
const ONLOAD = "login-required";

let INIT_OPTIONS = {
  url: IDP_URL,
  clientId: CLIENT_ID,
  realm: REALM,
  onLoad: ONLOAD,
};

export { INIT_OPTIONS, REDIRECT_URI };
