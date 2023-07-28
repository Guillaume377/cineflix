<template>
    <div class="m-5">
        <!-- Bouton de tri par nom -->
        <button class="mx-3 btn btn-danger" @click="sortByTitle">Trier par titre</button>

        <!-- Bouton de tri par date de sortie -->
        <button class="mx-3 btn btn-danger" @click="sortByReleaseDate">Trier par date de sortie</button>

        <!-- Bouton de tri par note moyenne -->
        <button class="mx-3 btn btn-danger" @click="sortByAverageRating">Trier par note moyenne</button>
    </div>
</template>

<script>



export default {

    name: 'SortButtons',


    data() { // les variables disponibles dans mon composant
        return { // indicateurs pour savoir si les tris ont été effectués

            sortedByTitle: false,
            sortedByReleaseDate: false,
            sortedByAverageRating: false

        }
    },

    methods: { // je déclare mes 3 fonctions de tri


        //*********************************************** tri par titre *********************************************** */
        sortByTitle() {

            // je crée une copie de ma liste de films (impossible de modifier directement une prop)

            let moviesToSort = this.movies

            // je vérifie si le titre a déjà été effectué ou pas

            // si le tri n'a PAS été effectué => tri normal, par ordre alphabétique
            if (!this.sortedByTitle) { // ou autre syntaxe : if (this.sortByTitle == false)


                // je trie mes films par titre
                //.normalize("NFD") = pour ne pas prendre en compte les accents dans le tri (exemple : le "é" classé après "z" devient "e" classé entre "d" et "f")

                moviesToSort.sort(function (a, b) {
                    // if (a.title.normalize("NFD") > b.title.normalize("NFD")) {         // si le titre du film a vient AVANT le titre du film b dans l'alphabet
                    //     return 1;                                                       // a est placé AVANT b
                    // } else if (a.title.normalize("NFD") < b.title.normalize("NFD")) {  // si c'est l'inverse
                    //     return -1;                                                      // a est placé APRES b
                    // } else {
                    //     return 0;                                                       // sinon (titres égaux), pas de changements
                    // }

                    // ou un code plus simple utilisant un ternaire
                    if (a.title.normalize("NFD") < b.title.normalize("NFD")) return -1;
                    return a.title.normalize("NFD") > b.title.normalize("NFD") ? 1 : 0;
                });

                //this.sortedByTitle = true

            } else {

                // si le tri a DEJA été effectué => tri par ordre alphabétique inversé = TRI INVERSE

                moviesToSort.sort(function (a, b) {
                    // if (a.title.normalize("NFD") > b.title.normalize("NFD")) {          // si le titre du film a vient AVANT le titre du film b dans l'alphabet
                    //     return -1;                                                     // a est placé AVANT b
                    // } else if (a.title.normalize("NFD") < b.title.normalize("NFD")) {  // si c'est l'inverse
                    //     return 1;                                                       // a est placé APRES b
                    // } else {
                    //     return 0;                                                       // sinon (titres égaux), pas de changements
                    // }

                    // ou un code plus simple utilisant un ternaire
                    if (a.title.normalize("NFD") > b.title.normalize("NFD")) return -1;
                    return a.title.normalize("NFD") < b.title.normalize("NFD") ? 1 : 0;
                });

                //this.sortedByTitle = false
            }

            // Autre syntaxe : au lieu d'écrire this.sortedByTitle = true et this.sortedByTitle = false, on peut mettre un code plus optimisé:
            this.sortedByTitle = !this.sortedByTitle

        },
        sortByReleaseDate() {

            // je crée une copie de ma liste de films (impossible de modifier directement une prop)

            let moviesToSort = this.movies

            // je vérifie si le titre a déjà été effectué ou pas

            // si le tri n'a PAS été effectué => tri normal, par ordre alphabétique
            if (!this.sortedByReleaseDate) {


                // je trie mes films par date

                moviesToSort.sort(function (a, b) {

                    if (a.release_date > b.release_date) return -1;
                    return a.release_date < b.release_date ? 1 : 0;
                });

            } else {

                // si le tri a DEJA été effectué => TRI INVERSE

                moviesToSort.sort(function (a, b) {

                    if (a.release_date < b.release_date) return -1;
                    return a.release_date > b.release_date ? 1 : 0;
                });
            }

            this.sortedByReleaseDate = !this.sortedByReleaseDate

        },

        sortByAverageRating() {

            // je crée une copie de ma liste de films (impossible de modifier directement une prop)

            let moviesToSort = this.movies

            // je vérifie si le titre a déjà été effectué ou pas

            // si le tri n'a PAS été effectué => tri normal, par ordre note la + haute vers la note la + basse
            if (!this.sortedByAverageRating) {


                // je trie mes films par date

                moviesToSort.sort(function (a, b) {

                    if (a.vote_average> b.vote_average) return -1;
                    return a.vote_average < b.vote_average ? 1 : 0;
                });

            } else {

                // si le tri a DEJA été effectué => TRI INVERSE

                moviesToSort.sort(function (a, b) {

                    if (a.vote_average < b.vote_average) return -1;
                    return a.vote_average > b.vote_average ? 1 : 0;
                });
            }

            this.sortedByAverageRating = !this.sortedByAverageRating


        },



    },




    // les films à trier, fournie par le parent
    props: ['movies']
}




</script>

<style>
button {
    font-family: 'Special Elite', cursive !important;
}

button:hover {
    background-color: white !important;
    color: red !important;

}
</style>