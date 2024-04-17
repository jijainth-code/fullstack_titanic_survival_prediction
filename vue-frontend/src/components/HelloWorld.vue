<template>
  <div id="app">
    <h2>Value:</h2>
    <h1>{{ messageFromBackend }}</h1>
    <div class="button-container">
      <button class="cta-button" @click="fetchData">Fetch Data from Backend</button>
      <router-link to="/"><button class="cta-button">Back 🤛🏼</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      messageFromBackend: ''
    };
  },
  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:8000')
        .then(response => {
          this.messageFromBackend = response.data.message;
        })
        .catch(error => {
          console.error('Error fetching data from backend:', error);
        });
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items vertically */
}

.cta-button {
  margin-bottom: 10px; /* Add space between buttons */
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