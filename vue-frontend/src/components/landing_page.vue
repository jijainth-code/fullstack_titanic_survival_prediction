<template>
  <div class="mainWindow">
    <nav>
      <div class="nav-logo">
        <a href="#">
          <img src="../assets/ship.png">
        </a>
      </div>

      <ul class="nav-links">
        <li class="link"><a href="#team">About Group</a></li>
        <li class="link"><a href="#f-link">Links</a></li>
      </ul>
      <router-link to="/basics"><button class="btn">Learn Basics</button></router-link>
    </nav>

    <header class="container">
      <div class="content">
        <span class="blur"></span>
        <span class="blur"></span>
        <h4>Survive Better</h4>
        <H1>Get Survival<span> Predictions </span></H1>
        <p>
          This web application allows users to predict the survival chances of Titanic passengers based on various input
          parameters. Our goal is to showcase the application of machine learning models in a real-world scenario.
        </p>
        <router-link to="/predict"><button class="btn">Prediction Calculator</button></router-link>
      </div>
      <div class="image">
        <img src="../assets/header.png">
      </div>
    </header>

    <footer>
      <div id="team" class="footer-container">
        <h1>Meet Our Team</h1>
        <div class="team-grid">
          <div class="team-member">
            <img src="../assets/bhanu.png" alt="Bhanu Pratap Singh">
            <h4>Bhanu Pratap Singh</h4>
            <p>
            <ul>
              <li>Frontend Engineer</li>
              <li>UI/UX Designer</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/rohit.png" alt="Bhanu Pratap Singh">
            <h4>Rohit Galani</h4>
            <p>
            <ul>
              <li>Backend Engineer</li>
              <li>Machine learning Engineer</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/nemish.png" alt="Bhanu Pratap Singh">
            <h4>Nemish Kyada</h4>
            <p>
            <ul>
              <li>Software Tester</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/aadi.png" alt="Bhanu Pratap Singh">
            <h4>Aadi Ahluwalia</h4>
            <p>
            <ul>
              <li>Frontend Engineer</li>
              <li>Version Control Manager</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/aryan.png" alt="Bhanu Pratap Singh">
            <h4>Aryan Jain</h4>
            <p>
            <ul>
              <li>Version Control Manager</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/avanish.png" alt="Bhanu Pratap Singh">
            <h4>Avanish Singh</h4>
            <p>
            <ul>
              <li>Software Tester</li>
              <li>DevOps Engineer</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/harsh.jpeg" alt="Bhanu Pratap Singh">
            <h4>Harsh Gurawaliya</h4>
            <p>
            <ul>
              <li>Backend Engineer</li>
            </ul>
            </p>
          </div>
          <div class="team-member">
            <img src="../assets/jijainth.jpeg" alt="Bhanu Pratap Singh">
            <h4>Jijainth Dhinakaran</h4>
            <p>
            <ul>
              <li>Frontend Engineer</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div id="f-link" class="f-link">
        <h1>Relevant Links : </h1>
        <div class="f-links">
          <div class="link">
            <h2>Gitlab Repository</h2>
            <a href="https://mygit.th-deg.de/ainb_24_sancus">
            <img src="../assets/gitlab-logo.png" alt="">
          </a>
          </div>
          <div class="link">
            <h2>Kaggle Dataset</h2>
            <a href="https://www.kaggle.com/c/titanic/data"><img src="../assets/dataset.png" alt=""></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
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
}

.mainWindow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background-color: #18181B;
}

img {
  width: 100%;
  display: flex;
}

a {
  text-decoration: none;
}

nav {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-logo {
  max-width: 70px;
}

.nav-links {
  margin: 2rem;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.link a {
  position: relative;
  padding-bottom: 0.75rem;
  color: #fff;
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

.btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1d4ed8;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #1e40af;
}

header .btn {
  margin-top: 2vh;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 5rem 2rem;
}

header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: 2rem;
  width: 100%;
}

header .content h4 {
  margin-bottom: 1rem;
  color: #ccc;
  font-size: 1rem;
  font-weight: 600;
}

header .content h1 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
}

header .content h1 span {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;
}

header .content p {
  margin-bottom: 2rem;
  color: #ccc;
}

header .image img {
  max-width: 100%;
  margin: auto;
}

footer {
  background-color: #1e1e21;
  color: #fff;
  padding: 2rem;
  width: 100%;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
}

.footer-container h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}



.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.team-member h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 0.7rem;
  color: #ccc;
}

.f-link {
  background-color: #18181B;
  margin: 4rem 0 0 0;
  padding: 2rem;
  border-radius: 50px;
}

.f-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 3rem;
}

.f-links img {
  width: 150px;
  height: 150px;
  border-radius: 10%;
  object-fit: contain;
}

@media (max-width: 1000px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }

  header {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .nav-links {
    gap: 0.5rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  header .content h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .f-links {
    flex-direction: column;
    
  }

  .link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .f-links img {
    width: 80px;
    height: 80px;
  }
}
</style>
