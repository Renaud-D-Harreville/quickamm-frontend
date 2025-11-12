<script setup lang="ts">
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
</script>
<template>
  <header>
    <Header />
  </header>
  <main>
    <RouterView />
  </main>
    <p></p>
  <footer>
    <Footer />
  </footer>
</template>
<style scoped>
    /* La section principale occupe tout l'espace disponible */
    main {
        flex: 1;
    }
</style>
