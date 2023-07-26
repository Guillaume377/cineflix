<template>

            <!-- j'affiche le titre de la page et sa sélection de films (films américains)-->
            <h1 class="pt-5 font-weight-light">
                Vos films français sont sur Cinéflix !
            </h1>

                <!-- v-bind : prop attendue = variable des dates (liste de films)-->
                <MoviesList v-bind:movies="frenchMovies" />

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
            frenchMovies: [],
            error: false // error : en cas d'erreur d'appel de l'API
        }
    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        // adresse de l'API     / version / mot-clé / clé API                                / options : français + popularité description. + page 1
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&with_original_language=fr&include_adult=false&vote_count.gte=1000&page=1")
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