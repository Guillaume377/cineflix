<template>
    <div class="card m-2">
        <img v-bind:src="source + movie.poster_path" alt="poster de film">
        <div class="card-body">

            <!-- .title = rechercher dans la console (clic droit sur le site Cinéflix -> inspecter -> console)-->
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text"> {{ movie.overview.substring(0, 200) + "..." }}</p>
            <p>note moyenne : {{ movie.vote_average }}</p>
            <p>{{ movie.vote_count }}</p>

            <a href="#" class="btn btn-success">Détail du film</a>

        </div>
    </div>
</template>

<script>
export default {

    name: "MovieCard",

    data () {
        return {
            // url de base des images de TMBD
            source: "https://image.tmdb.org/t/p/original/",
        }
    },

    props : ['movie']
}
</script>