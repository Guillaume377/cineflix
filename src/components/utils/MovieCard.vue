<template>
    <!--pour faire apparaitre le n° index "que" sur la page Top50Movies.vue-->
    <h3 v-if="$route.path == '/Top50Movies'" class="pb-3 text-danger card-title">
        <span v-once> #{{ index + 1 }}</span> <!-- pour faire apparaitre les chiffres à partir de 1 (et non de 0)-->
    </h3>

    <!-- v-bind:to , MovieDetails = chemin de la page , ${movie.id} = variable qui transmet l'id du film -->
    <router-link class="link" :to="`/MovieDetails/${movie.id}`">

        <div class="card m-2">
            <img v-bind:src="source + movie.poster_path" alt="poster de film">
            <div class="card-body">

                <!-- .title = rechercher dans la console (clic droit sur le site Cinéflix -> inspecter -> console)-->
                <h5 class="card-title"><span class="fw-bold">{{ movie.title }}</span></h5>
                <p><span class="fw-bold">Date de sortie: </span>{{ formatDate(movie.release_date) }}</p>
                <p class="card-text"> {{ movie.overview.substring(0, 200) + "..." }}</p>
                <p><span class="fw-bold">Note moyenne : </span>{{ movie.vote_average }}</p>
                <p><span class="fw-bold">Nombre de votes : </span>{{ movie.vote_count }}</p>

            </div>
        </div>

    </router-link>
</template>

<script>

import moment from "moment"
moment.locale('fr');

export default {

    name: "MovieCard",

    methods: {

        formatDate(value) {
            return moment(value).format('Do MMM YYYY');
        }
    },

    data() {
        return {
            // url de base des images de TMBD
            source: "https://image.tmdb.org/t/p/original/",

        }
    },

    props: ['movie', 'index']

}
</script>

<style>
a {
    text-decoration: none !important;
    color: inherit !important
  }
</style>