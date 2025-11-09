<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Index from './components/Index.vue'
</script>

<template>
  <body>
    <header>
        <h1>Avez vous déjà vu cette question ?</h1>
        Hmmm, il me semble que les réponses aient changées !
    </header>
    <main>
      <Index />
    </main>
    <p></p>
    <footer>
        © 2023 Quick-AMM
    </footer>
  </body>
</template>

<style>
    html, body {
        font-family: Arial, sans-serif;
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 0;
        background-color: #f9f9f9;
    }

    header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 20px 0;
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