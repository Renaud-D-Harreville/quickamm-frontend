<script setup lang="ts">
  import HomeIcon from "@/assets/icons/HomeIcon.vue"
  import AboutIcon from "@/assets/icons/AboutIcon.vue";
</script>
<template>
  <body>
  <header>
    <router-link to="/" aria-label="Home">
      <HomeIcon />QuickAMM
    </router-link>

            <h1>QuickAMM</h1>
    <nav>
      <router-link to="/about" aria-label="About">
        <AboutIcon />A propos
      </router-link>
      </nav>

  </header>
    <div id="sub-header">
      <h2>Une application pour réviser le probatoire AMM</h2>
    </div>
  <main>
    <RouterView />
  </main>
    <p></p>
    <footer>
        © 2023 Quick-AMM
    </footer>
  </body>
</template>

<style>

header {
  display: flex;
  justify-content: space-between; /* <-- This is the magic! */
  align-items: center;           /* Vertically centers the icons */
  padding: 20px 0px;
  border-bottom: 0px solid #eaeaea;
  background-color: #333;
}

#sub-header {
  padding: 20px 0px;
  border-bottom: 0px solid #eaeaea;
  background-color: #333;
  color: #fff;
  text-align: center;
}

nav {
  /* This element groups our right-hand links */
  display: flex;
  gap: 24px; /* Adds space *between* the icons */
}

header a {
  /* This styles *all* links in the header (both home and nav) */
  color: orange; /* Default icon color */
  text-decoration: none;
}

header a svg {
  /* This styles the SVG icons themselves */
  width: 28px;
  height: 28px;

  /* This is the *real* magic trick.
    It tells the SVG to be whatever color its parent <a> tag is.
    fill: currentColor;
  */
  transition: color 0.2s ease; /* Smooth color change on hover */
}

header a:hover {
  color: #e6a605; /* Set the hover color */
}

header a.router-link-exact-active {
  color: orange;
}

header a.router-link-exact-active:hover {
  color: #e6a605;
}

    html, body {
        font-family: Arial, sans-serif;
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 0;
        background-color: #f9f9f9;
    }



    /* La section principale occupe tout l'espace disponible */
    main {
        flex: 1;
    }

    footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px 0;
    }
    input[type="submit"] {
    background-color: #f0f0f0;
    color: #333;
    padding: 10px 20px;
    border: 2px solid #656565;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
    transition: border-color 0.3s, color 0.3s;
    margin-top: 10px;
}

input[type="submit"]:hover {
    border-color: #656565;
    color: #000000;
}
</style>