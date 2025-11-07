<script setup>

import { ref, reactive, onMounted } from 'vue'

const question = ref(null);
async function fetchData() {
  try {

    const response = await fetch('https://quickamm-fastapi-615761139088.europe-west1.run.app/random_question'); 

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();

    jsonData.answers.forEach(answer => {
      answer.checked = false
    })
    console.log(jsonData)


    question.value = jsonData;

  } catch (e) {
    console.log(" error while requesting api : ", e.message);
  }
}

fetchData();

const isValidateState = ref(false)
const isFormCorrect = ref(true)

function displayLongExplanation() {
        const collapseButtons = document.querySelectorAll('.long-explanation');
        collapseButtons.forEach(button => {
            button.classList.add('visible');
        });
    }

function validateAnswers() {
    isValidateState.value = true
    const all_correct = question.value.answers.every(option => {
        return option.is_true === option.checked
    })
    console.log(question.value.answers)
    isFormCorrect.value = all_correct
    console.log(isFormCorrect.value)

    displayLongExplanation()

    showHideLongExplanation()
}

// TODO : use Vue events to do this 

function showHideLongExplanation() {
// Ajout de JavaScript pour basculer entre les états
    const toggleButton = document.getElementById("toggleButton");
    const previewText = document.getElementById("previewText");
    const collapseText = document.getElementById("collapseText");

    toggleButton.addEventListener("click", () => {
        // Si le texte complet est visible, le cacher
        if (collapseText.classList.contains("show")) {
            collapseText.classList.remove("show");
            previewText.style.display = "-webkit-box"; // Réaffiche l'aperçu
            toggleButton.innerText = "Lire plus";
        } else {
            collapseText.classList.add("show");
            previewText.style.display = "none"; // Masque l'aperçu
            toggleButton.innerHTML = "Lire moins";
        }
    });
}

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
                <button v-if="!isValidateState" type="button" class="collapse-button" data-bs-toggle="collapse"
                        :data-bs-target="`#description-${index}`">▾
                </button>
                <button v-else type="button" class="collapse-button" data-bs-toggle="collapse"
                        :data-bs-target="`#description-${index}`" style="display: inline-block;">▾
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div :id="`description-${index}`" class="collapse">
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
  <div class="row">
    <div class="long-explanation">
      <!-- Texte collapsible -->
      <div id="collapseText" class="collapse">
        <span>{{ question.description }}</span>
        <div v-if="question.references">
            <h2> Réferences : </h2>
            <p v-for="reference in question.references">
              <b>{{ reference.description }}</b> : <i><a :href="`${reference.url}`" target="_blank" rel="noopener">{{ reference.url }}</a></i>
            </p>
        </div>
      </div>
      <!-- Texte aperçu (visible par défaut) -->
      <div id="previewText" class="text-preview">
        <span>{{ question.description }}</span>
      </div>
      <!-- Bouton pour basculer entre l'aperçu et le texte complet -->
      <button class="btn btn-link mt-2 p-0" id="toggleButton">
        Lire plus...
      </button>
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

    .long-explanation {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 1s, opacity 1s;
    }

    .long-explanation.visible {
        max-height: fit-content; /* Définir une hauteur suffisante pour contenir le contenu */
        opacity: 1;
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

    #question-mcq .collapse-button {
        display: none;
        transition: all 1s .5s;
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


    /* Limite l'aperçu initial à deux lignes */
    .text-preview {
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Limite à 2 lignes */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #question-result-icon {
        font-size: 60px;
    }


</style>
