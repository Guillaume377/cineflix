<template>
    <!-- j'affiche le titre de la page et sa sélection de films (films américains)-->
    <h1 class="pt-5 m-5 text-light font-weight-light">
        Vos films américains sont sur <span class="text-danger">Cinéflix</span> !
    </h1>


    <SortButtons :movies="americanMovies"></SortButtons>
    <!-- v-bind : prop attendue = variable des dates (liste de films)-->
    <MoviesList v-bind:movies="americanMovies" />

</template>

<script>
// import d'axios pour pouvoir faire des appels API
import axios from "axios"

import MoviesList from './utils/MoviesList.vue';
import SortButtons from "./utils/SortButtons.vue";

export default { // export du composant avec ses options

    name: "AmericanMovies",

    components: {
        MoviesList, SortButtons,
    },

    data() { // les variables disponibles dans mon composant
        return { // la variable movies va contenir les films récupérés par l'appel API
            americanMovies: [],
            error: false // error : en cas d'erreur d'appel de l'API
        }
    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        // adresse de l'API     / version / mot-clé / clé API                                / options : français + pays d'origine : US. + sortie et du + récent au + ancien
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&certification_country=us&vote_count.gte=1000&sort_by=primary_release_date.desc&page=1")
            // .then => cas où l'appel API a réussi et renvoie un résultat
            // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
            .then(res => {
                this.americanMovies = res.data.results // je stocke mes films récupérés dans la variable movies des datas
                console.log(this.americanMovies)
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