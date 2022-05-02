<template>

    <Navbar />
    <main class="app-container">
      <router-view :key="$route.fullPath"/>
    </main>
    <Footer />

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  beforeCreate: function() {
    this.$store.dispatch('authenticate')
  }
}
</script>


