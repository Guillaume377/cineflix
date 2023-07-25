import { createApp } from 'vue'
import App from './App.vue'

// j'importe le routeur
import router from "./router"

// on importe Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(router) // je l'injecte dans l'application
.mount('#app')
