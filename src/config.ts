export const isDev = process.env.NODE_ENV === "development";
const PROD_URL = "https://hajem.com";
const DEV_URL = "http://localhost:3000/";
export const URL_ORIGIN = isDev ? DEV_URL : PROD_URL;

const SERVER_ENPOINT = "http://localhost:3000";
const GOOGLE_OAUTH_REDIRECT_URL = "http://localhost:3000/api/rpc/googleOAuth";
const GOOGLE_CLIENT_ID = "505555007475-6l1bjckd4qt4mbfoq576bohbdqjg328l.apps.googleusercontent.com";

export const GOOGLE = { SERVER_ENPOINT, GOOGLE_OAUTH_REDIRECT_URL, GOOGLE_CLIENT_ID };
