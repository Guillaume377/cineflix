<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->
    <div class="container-fluid">
        <div class="row">
            <div v-for="movieAlias in movies"  v-bind:key="movieAlias.id" class="col-sm6 col-md-4 col-lg-3">
                <!--pas de padding/margin sur la col mais à mettre sur la card-->
                
                <!-- MovieCard affiche chaque film grâce à une boucle v-for -->
                <!-- v-bind: movie => props : ['movie'] de MovieCard.vue  et "movieAlias" = valeur (mon alias du v-for)-->
                <MovieCard v-bind:movie="movieAlias" />
                

            </div>
        </div>
    </div>
</template>

<script>

import MovieCard from './MovieCard';

export default {

    name: "Top50MoviesList",

    components: {
        MovieCard,
    },

    // liste de films à afficher, fournie par le parent
    props: ["movies"]
}
</script>