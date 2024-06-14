const IDP_URL = "https://tanflix.me/auth";
const REDIRECT_URI = window.location.origin;
const CLIENT_ID = "miw_public";
const REALM = "ce_assistant";
const ONLOAD = "login-required";
const AUTH_ENABLED = true;

let INIT_OPTIONS = {
  url: IDP_URL,
  clientId: CLIENT_ID,
  realm: REALM,
  onLoad: ONLOAD,
};

export { INIT_OPTIONS, REDIRECT_URI, AUTH_ENABLED };
