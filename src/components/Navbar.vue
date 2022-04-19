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
      
      <div class="collapse navbar-collapse" id="navbarCollapse">
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
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <a v-on:click.prevent="logout()" class="nav-link" href="#">Cerrar sesión</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
import * as auth from '../services/authService'

export default {
  name: 'navbar',
  methods: {
    logout: function() {
      auth.logout()
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

  