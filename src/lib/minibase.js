import Minibase from "./minibase-sdk.js";

let appName = import.meta.env.VITE_MB_APPNAME
let apiKey = import.meta.env.VITE_MB_APIKEY

export default new Minibase(appName, apiKey, {mode: 'online'})