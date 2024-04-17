<template>
  <div id="app">
    <h2>Value:</h2>
    <h1>{{ messageFromBackend }}</h1>
    <button @click="fetchData">Fetch Data from Backend</button>
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
</style>