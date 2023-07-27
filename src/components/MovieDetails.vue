<template>
    <h1 class="text-danger m-5">Détails du film</h1>

    <div class="container-fluid border border-danger">

        <div class="row m-5">

            <div class="col-md-6">
                <img class="w-75" v-bind:src="source + movie.poster_path" alt="poster de film">
            </div>

            <div class="col-md-6">
                <div class="mt-5" id="trailer" v-if="video[0]">
                    <iframe width="650" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen class="shadow"></iframe>
                </div>


                <h5 class="card-title m-5 fw-bolder">{{ movie.title }}</h5>
                <p><span class="fw-bold">Date de sortie:</span> {{ formatDate(movie.release_date) }}</p>
                <p><span class="fw-bold">Titre original :</span> {{ movie.original_title }}</p>

                <p><span class="fw-bold"> Genres : </span>
                    <span v-for="genre in movie.genres" :key="genre.id" class="badge bg-secondary">{{ genre.name }}</span>
                </p>

                <p><span class="fw-bold">Langue originale:</span>
                    <span v-if="movie.original_language == 'fr'"> français </span>
                    <span v-else-if="movie.original_language == 'en'"> anglais </span>
                    <span v-else>{{ movie.original_language }}</span>
                </p>
                <p><span class="fw-bold">Budget :</span> {{ movie.budget }} $</p>
                <p class="card-text"><span class="fw-bold">Résumé :</span> {{ movie.overview }}</p>
                <p><span class="fw-bold">Note moyenne :</span> {{ Math.round(movie.vote_average * 10) / 10 }}</p>
                <p><span class="fw-bold">Nombre de votes :</span> {{ movie.vote_count }}</p>
                <p><span class="fw-bold">Site officiel :</span> {{ movie.homepage }}</p>

            </div>

        </div>

    </div>
</template>

<script>


// import d'axios pour pouvoir faire des appels API
import axios from "axios"

import moment from "moment"
moment.locale('fr');


export default { // export du composant avec ses options

    name: "MovieDetails",

    methods: {

        formatDate(value) {
            return moment(value).format('Do MMM YYYY');
        },

    },

    data() {
        return {
            movie: [],
            movieId: this.$route.params.id,
            error: false, // error : en cas d'erreur d'appel de l'API

            // url de base des images de TMBD
            source: "https://image.tmdb.org/t/p/original/",
            video: [],
        };

    },

    created() {

        //code déclenché avant la génération du template par vue
        //c'est ici que je vais lancer mon appel API
        // adresse de l'API     / version / mot-clé / clé API                                / options : français + contenu sur  page
        axios.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=a5087ee297fbc59075d15615744b267d&language=fr`)
            // .then => cas où l'appel API a réussi et renvoie un résultat
            // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
            .then(res => {
                this.movie = res.data // je stocke mes films récupérés dans la variable movies des datas
                console.log(this.movie)
            })
            // .catch => cas où l'appel API échoue / à faire pour chaque API
            .catch(() => this.error = true)

        axios
            .get(
                "https://api.themoviedb.org/3/movie/" +
                this.movieId +
                "/videos?api_key=a5087ee297fbc59075d15615744b267d&language=fr"
            )
            .then((response) => {
                this.video = response.data.results;
                console.log(this.video);
            })

    }

}
</script>