<template>
    <div id="frenchMovies">
        <HeaderNav />

        <!-- si la route est / (racine du site) -->
        <div v-if="$route.path == '/'">

            <!-- j'affiche le titre de la page et sa sélection de films (films américains)-->
            <h1 class="pt-5 font-weight-light">
                Vos films français sont sur Cinéflix !
            </h1>

            <!-- en cas d'erreur de l'appel API-->
            <div v-if="error">
                <p class="bg-danger text-white p-3 fs-5">Une erreur est survenue. Merci de recharger la page ou de réessayer
                    plus
                    tard</p>
            </div>

            <!-- si appel API ok-->
            <div v-else>
                <!-- MoviesList affiche les films grâce à une boucle v-for -->
                <!-- v-bind : prop attendue = variable des dates (liste de films)-->
                <MoviesList v-bind:movies="frenchMovies" />
            </div>
        </div>

        <!-- tous les autres cas : si la route est différente de / -->
        <div v-else>
            <!-- j'affiche le template du composant concerné par la route (ex : FrenchMovies)-->
            <router-view :key="$route.fullPath"></router-view>
        </div>

        <FooterApp />
    </div>
</template>

<script>
// import d'axios pour pouvoir faire des appels API
import axios from "axios"

import MoviesList from './utils/MoviesList.vue';

export default {

    name: "FrenchMovies",

    components: {
        MoviesList,
    },

    data() { // les variables disponibles dans mon composant
        return { // la variable movies va contenir les films récupérés par l'appel API
            frenchMoviesMovies: [],
            error: false // error : en cas d'erreur d'appel de l'API
        }
    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon apel API
        // adresse de l'API     / version / mot-clé / clé API                                / options : français + popularité description. + page 1
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&sort_by=popularity.desc&page=1")
            // .then => cas où l'appel API a réussi et renvoie un résultat
            // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
            .then(res => {
                this.frenchMovies = res.data.results // je stocke mes films récupérés dans la variable movies des datas
                console.log(this.frenchMovies)
            })
            // .catch => cas où l'appel API échoue / à faire pour chaque API
            .catch(() => this.error = true)
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>