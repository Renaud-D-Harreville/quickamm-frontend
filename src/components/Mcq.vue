<script setup lang="ts">

import { ref, onMounted } from 'vue'
import type { Question } from '@/scripts/models'
import {fetchRandomQuestion} from "@/scripts/apis.ts";

const question = ref<Question | null>(null);
const isLongExplanationOpen = ref(false)
const isValidateState = ref(false)
const isFormCorrect = ref(true)


async function fetchData() {
  try {
    const fetchedQuestion = await fetchRandomQuestion();
    fetchedQuestion.answers.forEach(answer => {
      answer.checked = false
      answer.isOpen = false
    })
    question.value = fetchedQuestion;
  } catch (e: any) {
    console.log(e.message || 'Failed to fetch question')
  }
}


function validateAnswers() {
    isValidateState.value = true
    if (!question.value) return;
    const all_correct = question.value.answers.every(option => {
        return option.is_true === option.checked
    })
    console.log(question.value.answers)
    isFormCorrect.value = all_correct
    console.log(isFormCorrect.value)
}

function newQuestion() {
  fetchData()
  isValidateState.value = false
}

onMounted(() => {
  fetchData();
});

</script>

<template>

<div v-if="!question">Loading question</div>
<div v-else class="container" id="question-mcq">
  <div class="row">
    <div class="col-10">
      <h2>Question</h2>
      <p>{{ question.question }}</p>
    </div>
    <div class="col-2 align-items-center">
      <span v-if="!isValidateState" id="question-result-icon">&nbsp;</span>
      <span v-else-if="isValidateState && isFormCorrect" id="question-result-icon" class="correct">✔</span>
      <span v-else-if="isValidateState && !isFormCorrect" id="question-result-icon" class="wrong">✖</span>
    </div>

  </div>
  <div v-if="question.image_path" class="row">
      <img :src="`https://quickamm-fastapi-615761139088.europe-west1.run.app/${question.image_path}`" alt="My image" class="question-img">
  </div>
  <div class="row>">
    <div id="question-section">
      <form id="question-form">
          <div v-for="(option, index) in question.answers" class="option container text-center">
            <div class="row">
              <div class="col-1 ">
                <span v-if="!isValidateState" class="result-icon" :id="`option-icon-${index}`"></span>
                <span v-else-if="isValidateState && option.is_true" class="result-icon correct" :id="`option-icon-${index}`">✔</span>
                <span v-else-if="isValidateState && !option.is_true" class="result-icon wrong" :id="`option-icon-${index}`">✖</span>
              </div>
              <div class="col-10">
                <input type="checkbox" :id="`option-${index}`" name="option" :value="`${index}`" v-model="option.checked">
                <label :for="`option-${index}`">{{ option.text }}</label>
              </div>
              <div class="col-1">
                <div v-if="isValidateState">
                  <button type="button" @click="option.isOpen = !option.isOpen" style="display: inline-block;">▾</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div v-if="option.isOpen">
                  <span>{{ option.explanation }}</span>
                </div>
              </div>
            </div>
          </div>

      </form>
    </div>
  </div>
  <div class="row justify-content-center" id="validate_answer">
    <div class="col-auto text-center">
      <button type="button" @click="validateAnswers()">Valider</button>
    </div>
  </div>
  <p></p>
  <div class="row justify-content-center">
    <div class="col-auto text-center" id="button-new-question">
      <button @click="newQuestion()" class="mx-auto d-block" >
        Nouvelle question
      </button>
    </div>
  </div>
  <p></p>
  <div class="row">
    <div v-if="isValidateState">
      <button @click="isLongExplanationOpen = !isLongExplanationOpen">
        {{ isLongExplanationOpen ? 'Aller plus loin' : 'Aller plus loin...' }}
      </button>
      <div v-if="isLongExplanationOpen">
        <span>{{ question.description }}</span>
        <div v-if="question.references">
            <h2> Réferences : </h2>
            <p v-for="reference in question.references">
              <b>{{ reference.description }}</b> : <i><a :href="`${reference.url}`" target="_blank" rel="noopener">{{ reference.url }}</a></i>
            </p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style>
p {
  font-family: verdana;
  font-size: 15px;
}
    .question-img {
        max-height: 400px; /* Limite la hauteur à 400px */
        width: auto; /* Garde les proportions */
        height: auto; /* Garde les proportions (en cas de max-height) */
        max-width: 100%; /* Évite de dépasser la largeur du conteneur */
        margin: 0 auto; /* Centrage horizontal si nécessaire */
        border-radius: 20px !important;
    }


    .result-icon {
        font-size: 25px;
        opacity: 0;
        transition: opacity 1s ;
    }

    .correct {
        color: darkseagreen;
        opacity: 1;
    }

    .wrong {
        color: firebrick;
        opacity: 1;
    }

    #question-mcq .option {
        margin: 10px 0;
    }

    #question-mcq .option input {
        display: none;
    }

    #question-mcq .option label {
        background-color: #ccc;
        color: black;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        text-align: center;
        transition: background-color 0.3s;
        position: relative;
    }

    #question-mcq .option input:checked + label {
        background-color: #4CAF50;
    }

    #question-mcq .option input:checked + label:hover {
        background-color: #22c328;
    }

    #question-mcq button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #question-mcq button:hover {
        background-color: #22c328;
    }


    #question-result-icon {
        font-size: 60px;
    }

    #button-new-question button {
      background-color: #a9b1a9;
        color: black;
        padding: 10px 20px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    #button-new-question button:hover {
      background-color: #909790;
    }


</style>
