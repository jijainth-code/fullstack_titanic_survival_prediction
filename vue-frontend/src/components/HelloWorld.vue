<template>
  <div id="app">
    <header>
      <h1>Titanic Survivor Prediction App</h1>
      <nav>
        <router-link to="/"><button class="btn">Home</button></router-link>
        <ul>
          <li class="link"><a href="#introduction">Introduction</a></li>
          <li class="link"><a href="#technical-explanation">Technical Explanation</a></li>
          <li class="link"><a href="#user-guide">User Guide</a></li>
        </ul>
        <router-link to="/predict"><button class="btn">Prediction Calculator</button></router-link>
      </nav>
    </header>

    <main>
      <section id="introduction">
        <h2>Project Overview</h2>
        <p>
          Welcome to our Titanic Survivor Prediction project! This web application predicts the survival chances of passengers
          from the Titanic disaster. The project aims to provide an intuitive interface where users can input passenger details
          and see survival predictions based on various machine learning models.
        </p>
      </section>

      <section id="technical-explanation">
        <h2>How the Code Works</h2>
        <p>
          The application is built using a combination of modern web technologies:
        </p>
        <ul>
          <li><u><strong>Frontend:</strong></u>    Developed with Vue.js, utilizing components for a modular structure. Key components include `HelloWorld.vue`, `landing_page.vue`, and `PredictPage.vue`.</li>
          <br>
          <li><u><strong>Backend:</strong></u>    Implemented with FastAPI, a modern Python web framework. This handles the model predictions and serves the RESTful API.</li>
          <br>
          <li><u><strong>Machine Learning Models:</strong></u>    Includes Random Forest, Decision Tree, KNN, SVM, and Logistic Regression. These models are trained using historical Titanic data and are stored as Pickle files for inference.</li>
          <br>
          <li><u><strong>Docker:</strong></u>    The entire application, including the web interface and prediction service, is containerized using Docker and managed with Docker Compose.</li>
        </ul>
      </section>

      <section id="user-guide">
        <h2>User Guide</h2>
        <p>
          New to our website? Here’s a quick guide to get you started:
        </p>
        <ul>
          <li><u><strong>Landing Page:</strong></u> Start here to understand the basics of our application. You'll find an introduction and a link to the Survival Calculator.</li>
          <br>
          <li><u><strong>Survival Calculator:</strong></u> Navigate to this page to input passenger details (class, sex, age, fare, traveling alone, and embarked location) and choose from various prediction models. The calculator will show predictions for survival based on the input data.</li>
          <br>
          <li><u><strong>Predictions:</strong></u> View real-time predictions for the selected models as you input data. The page also maintains a history of the last 5 predictions made during your session.</li>
          <br>
          <li><u><strong>Contact Us:</strong></u> For any questions or feedback, use the contact information provided on the site.</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Titanic Survivor Prediction App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: #fff;
}

#app {
  font-family: 'Poppins', sans-serif;
  background-color: #18181B;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #1f2937;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0.5rem;
  list-style: none;
  background: rgba(0, 0, 255, 0.128);
  border-radius: 10rem;
}

.link a {
  position: relative;
  padding-bottom: 0.75rem;
  color: #fff;
  font-size: 1rem;
}

.link a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 0;
  bottom: 0;
  left: 0;
  background-color: #1d4ed8;
  transition: all 0.3s ease;
}

.link a:hover::after {
  width: 70%;
}

nav ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1d4ed8;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem 0;
}

.btn:hover {
  background-color: #1e40af;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
}

section {
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
}

h2 {
  background-color: rgba(0, 0, 255, 0.128);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10rem;
}

p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
}

ul li {
  margin-bottom: 0.5rem;
}

footer {
  background-color: #1f2937;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
}

@media (min-width: 600px) {

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  nav {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  nav ul {
    flex-direction: row;
    width: auto;
    margin: 0;
  }

  .btn {
    margin: 0;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .btn {
    padding: 1rem 3rem;
  }
}

@media (min-width: 1024px) {
  nav ul {
    gap: 2rem;
  }
}
</style>
