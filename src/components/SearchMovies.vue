<template>
    <h1 class="text-light text-center m-5">Recherche de films sur <span class = "text-danger">Cinéflix</span></h1>

    <div>
        <input type="text" v-model="query" @keyup="searchMovies" placeholder="Rechercher..." />
        <MoviesList :movies="movies"></MoviesList>
    </div>
</template>

<script>

import axios from "axios";
import MoviesList from './utils/MoviesList.vue';

export default {

    components: {
        MoviesList,
    },

    name: "SearchMovies",


    data() {
        return {
            query: "", // La variable "query" pour stocker la valeur de recherche
            movies: [], // La variable "movies" pour stocker les résultats de recherche
        };
    },

    methods: {

        searchMovies() {
            //code déclenché avant la génération du template par vue
            //c'est ici que je vais lancer mon appel API
            // adresse de l'API     / version / mot-clé / clé API                                / options : français 
            axios.get("https://api.themoviedb.org/3/search/movie?query=" + this.query + "&api_key=a5087ee297fbc59075d15615744b267d&language=fr&include_adult=false")
                // .then => cas où l'appel API a réussi et renvoie un résultat
                // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
                .then(res => {
                    // Mettre à jour la variable "movies" avec les résultats de recherche
                    this.movies = res.data.results;
                    
                })
                .catch(error => {
                    console.error('Erreur lors de la recherche de films :', error);
                });

        }
    },




}
</script>

<style scoped>

h1 {
    margin-top: 20% !important;
    margin-bottom : 5% !important;
}

</style>