<template>
  <div id="app">
    <HeaderNav />

    <!-- si la route est / (racine du site) -->
    <div v-if="$route.path == '/'">

      <!-- j'affiche le titre de l'accueil et sa sélection de films (les + populaires)-->
      <h1 class="pt-5 m-5 font-weight-light text-light ">
        Vos films préférés sont sur <span class="text-danger">Cinéflix</span> !
      </h1>

    
      <!-- en cas d'erreur de l'appel API-->
      <div v-if="error">
        <p class="bg-danger text-white p-3 fs-5">Une erreur est survenue. Merci de recharger la page ou de réessayer plus
          tard</p>
      </div>

      <!-- si appel API ok-->
      <div v-else>
        <SortButtons :movies="popularMovies"></SortButtons>
        <!-- MoviesList affiche les films grâce à une boucle v-for -->
        <!-- v-bind : prop attendue = variable des dates (liste de films)-->
        <MoviesList v-bind:movies="popularMovies" />

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

import HeaderNav from './components/template/HeaderNav.vue';
import FooterApp from './components/template/FooterApp.vue';

import MoviesList from './components/utils/MoviesList.vue';
import SortButtons from './components/utils/SortButtons.vue';

export default { // export du composant avec ses options

  name: 'App',

  components: {
    HeaderNav, FooterApp, MoviesList, SortButtons,
  },

  data() { // les variables disponibles dans mon composant
    return { // la variable movies va contenir les films récupérés par l'appel API
      popularMovies: [],
      error: false, // error : en cas d'erreur d'appel de l'API

      
    }
  },

  created() {
    //code déclenché avant la génération du template par vue
    //c'est ici que je vais lancer mon apel API
    // adresse de l'API     / version / mot-clé / clé API                                / options : français + popularité decr. + page 1
    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&sort_by=popularity.desc&page=1")
      // .then => cas où l'appel API a réussi et renvoie un résultat
      // .then => prend en paramètre une fonction fléchée anonyme. res= réponse de l'API
      .then(res => {
        this.popularMovies = res.data.results // je stocke mes films récupérés dans la variable movies des datas
        console.log(this.popularMovies)
      })
      // .catch => cas où l'appel API échoue / à faire pour chaque API
      .catch(() => this.error = true)
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

body {
  background-image: url(./assets/fond_r_n.jpg);
}

h1 {
  font-family: 'Special Elite', cursive !important;
}


</style>

<!-- style scoped si application du style uniquement sur la page concernée-->
