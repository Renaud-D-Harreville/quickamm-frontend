<script setup>
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
      #questionBox {
      }

      #formBox {
      }

      @media (max-width: 320px) {
          .element {
              width: 90%;
          }
      }

      #fixed-row {
          position: fixed; /* Le bouton reste visible à une position fixe */
          bottom: 30px; /* Place le bouton 20px au-dessus du bas de l'écran */
          left: 50%; /* Centre horizontalement */
          transform: translateX(-50%); /* Centrer correctement le conteneur */
          z-index: 1000; /* S’assure que le bouton est au-dessus du reste du contenu */
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

      #fixed-row input[type="submit"] {
          margin: 0; /* Supprime les marges par défaut */
          transform: translateY(-0px); /* Ajuster légèrement si c'est encore désaligné */
      }

      #big-result-icon {
          margin: 0; /* Supprimez les marges inutiles pour éviter le décalage */
      }
/* End of adjusting */

    #big-result-icon {
        font-size: 60px;
        opacity: 0;
        transition: opacity 1s;
    }


  </style>
