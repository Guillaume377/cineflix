<template>
    <!-- j'affiche le titre de la page et sa sélection de films (films américains)-->
    <h1 class="pt-5 m-5 text-light font-weight-light">
        Votre Top 50 sur <span class = "text-danger">Cinéflix </span>!
    </h1>

    <!-- v-bind : prop attendue = variable des dates (liste de films)-->
    <MoviesList v-bind:movies="top50Movies" />
</template>

<script>
// import d'axios pour pouvoir faire des appels API
import axios from "axios"

import MoviesList from './utils/MoviesList.vue';

export default { // export du composant avec ses options

    name: "Top50Movies",

    components: {
        MoviesList,
    },

    data() { // les variables disponibles dans mon composant
        return { // la variable movies va contenir les films récupérés par l'appel API
            top50Movies: [],
            error: false // error : en cas d'erreur d'appel de l'API
        }
    },

    created() {
        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        // adresse de l'API     / version / mot-clé / clé API                                / options : français + vote : +10 000 + note moyenne par ordre décroissant + sur 1 page
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=1")
            // .then => cas où l'appel API a réussi et renvoie un résultat
            // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
            .then(res => {
                this.top50Movies = res.data.results // je stocke mes films récupérés dans la variable movies des datas

                axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=2")
                    .then(res => {
                        this.top50Movies = this.top50Movies.concat(res.data.results)

                        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&sort_by=vote_average.desc&page=3")
                            .then(res => {
                                this.top50Movies = this.top50Movies.concat(res.data.results)

                                // const sortMoviesByVoteAverage = (movies) => {
                                //     return movies.sort((a, b) => b.vote_average - a.vote_average);
                                // };

                                // const sortedMovies = sortMoviesByVoteAverage(top50Movies);

                                this.top50Movies = this.top50Movies.slice(0, 50)



                                console.log(this.top50Movies)
                            })

                    })

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