<template>
  <div class="about-container">
    <header class="about-header">
      <h1>À propos de Quickamm</h1>
      <p class="tagline">
        Une plateforme de QCM intelligente conçue pour vous aider à préparer le diplôme d'Accompagnateur en Montagne (AEM).
      </p>
    </header>

    <section class="content-section">
      <h2>⛰️ Le Défi : Mémoriser les concepts, pas le test</h2>
      <p>
        Le diplôme d'Accompagnateur en Moyenne Montagne (AMM) exige des candidats qu'ils réussissent un QCM au tout début de leur formation.
        La plupart des outils de préparation existants utilisent des questions statiques, où les questions et les réponses sont toujours dans le même ordre.
      </p>
      <p class="highlight">
        Cela conduit à un problème courant : <strong>les candidats commencent à mémoriser <em>l'ordre</em> des réponses plutôt que de <em>comprendre</em> les concepts.</strong>
      </p>
    </section>

    <section class="content-section">
      <h2>✨ Notre Solution : S'entraîner plus intelligemment</h2>
      <p>
        Quickamm a été conçu pour résoudre ce problème précis en se concentrant sur deux principes fondamentaux : <strong>la randomisation intelligente</strong> et <strong>les explications détaillées</strong>.
      </p>
      <p>
        Le projet a commencé comme un simple outil en ligne de commande (d'où le nom "Quick"), mais a été reconstruit en tant qu'application web moderne pour aider plus de candidats à réussir.
      </p>
    </section>

    <section class="features-section">
      <h2>🎯 Fonctionnalités Clés</h2>
      <div class="features-grid">

        <div class="feature-card">
          <h3>🧠 Randomisation Intelligente</h3>
          <p>Pour éviter "d'apprendre le test" par cœur, Quickamm construit dynamiquement chaque question :</p>
          <ul>
            <li><strong>Ordre des réponses aléatoire :</strong> L'ordre des réponses possibles est mélangé à chaque fois.</li>
            <li><strong>Banque de réponses dynamique :</strong> L'algorithme puise dans une large banque de réponses et sélectionne au moins une réponse correcte et plusieurs réponses incorrectes.</li>
            <li><strong>Variété massive :</strong> Cette approche crée un très grand nombre de combinaisons de questions uniques, rendant très improbable de revoir deux fois la même question.</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>📚 Explications Détaillées</h3>
          <p>Réussir le test ne consiste pas seulement à trouver la bonne réponse ; il s'agit de savoir <em>pourquoi</em> elle est correcte.</p>
          <ul>
            <li><strong>Explications par question :</strong> Après avoir répondu, vous obtenez une explication détaillée pour la question dans son ensemble.</li>
            <li><strong>Feedback par réponse :</strong> Chaque réponse individuelle (correcte ou incorrecte) inclut également une courte explication.</li>
            <li><strong>Aller plus loin :</strong> Pour encourager l'apprentissage, les explications incluent des références pour en savoir plus sur le sujet.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section tech-note">
      <p>
        Ce site web est le "frontend" d'un projet en deux parties. Il récupère toutes ses questions et sa logique depuis le
        <a href="https://github.com/Renaud-D-Harreville/quickamm-fastapi" target="_blank" rel="noopener noreferrer">Backend FastAPI Quickamm</a>.
      </p>
    </section>

  </div>
</template>

<style scoped>
/* Les styles sont identiques à la version anglaise */
/* Scoped CSS means these styles will *only* apply to this component */

.about-container {
  max-width: 900px; /* Limits line length for readability */
  margin: 40px auto; /* Centers the content */
  padding: 0 20px;
  color: #333;
  line-height: 1.7;
}

.about-header {
  text-align: center;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 30px;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2c3e50;
}

.tagline {
  font-size: 1.25rem;
  color: #555;
  margin: 0;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.content-section p {
  font-size: 1rem;
  margin-bottom: 16px;
}

.highlight {
  background-color: #fdf6e4;
  border-left: 4px solid #f0b90b;
  padding: 16px;
  border-radius: 4px;
}

.features-section h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 30px;
}

.feature-card {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #42b983; /* Use your app's theme color! */
  margin-top: 0;
  margin-bottom: 15px;
}

.feature-card ul {
  padding-left: 20px;
  margin: 0;
}

.feature-card li {
  margin-bottom: 10px;
}

.tech-note {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #eee;
  padding-top: 30px;
  margin-top: 40px;
}

.tech-note a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.tech-note a:hover {
  text-decoration: underline;
}

/* Make it responsive for mobile */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr; /* Stack columns on small screens */
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1.1rem;
  }
}
</style>