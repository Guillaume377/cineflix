<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">

            <li class="nav-item mb-4">
                <router-link to="/" class="link text-center nav-link text-danger mx-5">CINEFLIX</router-link>
            </li>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <router-link to="/AmericanMovies" class="link text-center nav-link text-danger mx-5">Films
                            américains</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/FrenchMovies" class="link text-center nav-link text-danger mx-5">Films
                            français</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/LastMovies" class="link text-center nav-link text-danger mx-5">Films
                            récents</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/Top50Movies" class="link text-center nav-link text-danger mx-5">Top
                            50</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/SearchMovies" class="link text-center nav-link text-danger mx-5">Recherche de
                            films</router-link>
                    </li>

                </ul>
            </div>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

    </nav>

    <h1 class="text-center text-white m-5">Cinéflix</h1>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>

