import { createWebHistory, createRouter } from "vue-router"

// on importe les différents composants (concernés pas des routes)

import App from "./App.vue"
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import SearchMovies from "./components/SearchMovies.vue";
import MovieDetails from "./components/MovieDetails.vue";

const routes = [    // on déclare les routes
  {
    path: '/',    // path = url
    component: App // composant associé
  },

  {
    path: '/AmericanMovies',    // path = url
    component: AmericanMovies // composant associé
  },

  {
    path: '/FrenchMovies',    // path = url
    component: FrenchMovies // composant associé
  },

  {
    path: '/LastMovies',    // path = url
    component: LastMovies // composant associé
  },

  {
    path: '/Top50Movies',    // path = url
    component: Top50Movies // composant associé
  },

  {
    path: '/SearchMovies',    // path = url
    component: SearchMovies // composant associé
  },

  {
    path: '/MovieDetails/:id', // path = url
    component: MovieDetails // composant associé

  },
]

const router = createRouter({        //j'initialise le routeur, je lui passe les options ci-dessous
  history: createWebHistory(),     // j'active le mode historique
  routes: routes                  // je lui passe la liste des routes
});

export default router