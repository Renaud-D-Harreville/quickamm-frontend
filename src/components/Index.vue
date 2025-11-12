<script setup lang="ts">
import Mcq from './Mcq.vue';
</script>
<template>
  <div class="container justify-content-center">
    <div class="row g-10 w-100 " id="question-index">
      <div class="col-lg-12 section" id="questionBox">
        <Mcq />
      </div>
    </div>
  </div>
</template>

<style scoped>


      @media (max-width: 320px) {
          .element {
              width: 90%;
          }
      }

      #fixed-row .correct {
          color: darkseagreen;
          opacity: 1;
      }

       #fixed-row .wrong {
           color: firebrick;
           opacity: 1;
       }
 /* Adjusting the two boxes so that they are at the same horizontal height */
      #fixed-row .col-10,
      #fixed-row .col-2 {
          display: flex; /* Active le mode Flexbox pour les deux colonnes */
          align-items: center; /* Centrage vertical parfait */
          height: 100%; /* Uniformise la hauteur */
      }

      #fixed-row button {
          margin: 0; /* Supprime les marges par défaut */
          transform: translateY(-0px); /* Ajuster légèrement si c'est encore désaligné */
      }
  </style>
