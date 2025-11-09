
import type { Question } from '@/scripts/models'

const API_URL = 'https://quickamm-fastapi-615761139088.europe-west1.run.app/random_question';

export async function fetchRandomQuestion(): Promise<Question> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData: Question = await response.json();

    // Nous laissons le composant gérer l'ajout de 'checked' et 'isOpen'
    // car c'est un "état d'affichage" (view state)
    return jsonData;

  } catch (e) {
    if (e instanceof Error) {
      console.log("Error while requesting api: ", e.message);
    } else {
      console.log("An unknown error occurred: ", e);
    }
    // Propagez l'erreur pour que le composant puisse réagir
    throw e;
  }
}