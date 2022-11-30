<template>
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
    <div class="container-fluid">
      <router-link v-if="!$store.state.isLoggedIn" to="/" class="navbar-brand">
        <img style="max-height:25px" src="../assets/logo.svg" />Filmsapp
      </router-link>
      <router-link v-if="$store.state.isLoggedIn" to="/movies" class="navbar-brand">
        <img style="max-height:25px" src="../assets/logo.svg" />Filmsapp
      </router-link>
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="register">
              Registrarse
            </router-link>            
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link class="nav-link" to="login">
              iniciar sesión
            </router-link>            
          </li>
        </ul>
    </div>
    <form class="w-100 me-3" role="search" v-if="$store.state.isLoggedIn">
      
          <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search" v-model='query' @keyup.enter='getResult(query)'>
    </form>
    <div class="flex-shrink-0 dropdown" v-show="$store.state.isLoggedIn">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"  data-bs-toggle="dropdown">
            <img src="https://github.com/mdo.png" alt="mdo" width="55" height="55" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" style="position: absolute; inset: 30px 15px auto auto; margin: 0px; transform: translate(0px, 34px);" data-popper-placement="bottom-end">
            <li><a class="dropdown-item" href="#">Favoritas</a></li>
            <li><a class="dropdown-item" href="#">Listas</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a v-on:click.prevent="logout()" class="dropdown-item" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
  </nav>
</header>
</template>

<script>
import * as auth from '../services/AuthService.js'

export default {
  name: 'navbar',
  data () {
 return {
  query: '',
}
 },
  methods: {
    logout: function() {
      auth.logout()
      this.$router.push({ name: 'home' })
    },
    getResult(query) {
    this.$router.push({ name: 'SearchMovies', params: { query: this.query } })
  }
  }
 }


</script>

  