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
  </style>
