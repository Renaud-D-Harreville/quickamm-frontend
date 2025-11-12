<script setup lang="ts">
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import AboutIcon from "@/assets/icons/AboutIcon.vue";
</script>

<template>
  <header>
    <div class="container justify-content-center">
      <div class="row g-10 w-100">
        <div class="col-lg-3 section" id="left-header">
          <router-link to="/" aria-label="Home">
            <HomeIcon />QuickAMM
          </router-link>
        </div>
        <div class="col-lg-6 section" id="center-header">
          <h1>QuickAMM</h1>
          <h2>Une application pour réviser le probatoire AMM</h2>
        </div>
        <div class="col-lg-3 section" id="right-header">
          <nav>
            <router-link to="/about" aria-label="About">
              <AboutIcon />A propos
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

header {
  flex: 1;
  align-content: center;
  padding: 20px;
  background-color: #333;
}

header a {
  color: orange;
  text-decoration: none;
}

header a svg {
  width: 28px;
  height: 28px;
  transition: color 0.2s ease;
}

header a:hover {
  color: #e6a605;
}

#left-header {
  text-align: left;
}

#right-header {
  text-align: right;
}
</style>