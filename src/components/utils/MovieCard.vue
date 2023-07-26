<template>
    <!--pour faire apparaitre le n° index "que" sur la page Top50Movies.vue-->
    <h3 v-if="$route.path == '/Top50Movies'" class="pb-3 text-danger card-title">
        <span v-once> #{{ index + 1 }}</span> <!-- pour faire apparaitre les chiffres à partir de 1 (et non de 0)-->
    </h3>
    
    <router-link class="link" :to="`/MovieDetails/${movie.id}`">

        <div class="card m-2">
            <img v-bind:src="source + movie.poster_path" alt="poster de film">
            <div class="card-body">

                <!-- .title = rechercher dans la console (clic droit sur le site Cinéflix -> inspecter -> console)-->
                <h5 class="card-title">{{ movie.title }}</h5>
                <p>date de sortie: {{ movie.release_date }}</p>
                <p class="card-text"> {{ movie.overview.substring(0, 200) + "..." }}</p>
                <p>note moyenne : {{ movie.vote_average }}</p>
                <p>{{ movie.vote_count }}</p>

            </div>
        </div>
        
    </router-link>

</template>

<script>
export default {

    name: "MovieCard",

    data() {
        return {
            // url de base des images de TMBD
            source: "https://image.tmdb.org/t/p/original/",

        }
    },

    props: ['movie', 'index']

}
</script>