const IDP_URL = "http://keycloak:8080/";
const REDIRECT_URI = window.location.origin;
const CLIENT_ID = "miw_public";
const REALM = "ce_assistant";
const ONLOAD = "login-required";

let INIT_OPTIONS = {
  url: IDP_URL,
  clientId: CLIENT_ID,
  realm: REALM,
  onLoad: ONLOAD,
};

export { INIT_OPTIONS, REDIRECT_URI };
