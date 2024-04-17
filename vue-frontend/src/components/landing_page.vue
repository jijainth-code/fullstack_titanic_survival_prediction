<template>
    <div class="landing-page">
      <nav class="navbar">
        <div class="container">
          <img alt="Logo" src="../assets/ship.png" class="logo">
        </div>
      </nav>
  
      <div class="hero-section">
        <div class="container">
          <h1>Titanic Survival Prediction</h1>
          <p>A ML model to predict if you will survive the Crash !</p>
            <div class="button-container">
                <router-link to="/predict"><button class="cta-button">Wish me Luck 💪🏼</button></router-link>
                <router-link to="/basics"><button class="cta-button">Learn Basics ⚒️</button></router-link>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage'
  }
  </script>
  
  <style scoped>
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f7fa; /* Whole background gray */
  }
  
  /* Navbar styles */
  .navbar {
    background-color: #fff; /* Light background color */
    padding: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo {
    width: 120px;
  }
  
  /* Hero section styles */
  .hero-section {
    background-color: #fff;
    padding: 100px 0;
    text-align: center;
    border-bottom: 1px solid #e6e9ee; /* Add border bottom */
  }
  
  .hero-section h1 {
    font-size: 48px;
    color: #2b3945; /* Dark text color */
    margin-bottom: 20px;
  }
  
  .hero-section p {
    font-size: 18px;
    color: #7f8a95; /* Light text color */
    margin-bottom: 40px;
  }

  .button-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items vertically */
}
  
  .cta-button {
  padding: 15px 40px;
  font-size: 18px;
  background-color: #38a169; /* Green button color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1f9d55; /* Darker green on hover */
}
  </style>
  