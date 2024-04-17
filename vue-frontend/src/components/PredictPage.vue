<template>
    <div>
      <h1>Predict Page</h1>
      <router-link to="/"><button class="cta-button">Back 🤛🏼</button></router-link>
  
      <!-- Combined form for both string and integer input -->
      <form @submit.prevent="submitForm">
        <label for="stringInput">Enter a String:</label>
        <input type="text" id="stringInput" v-model="stringInput">
        
        <label for="integerInput">Enter an Integer:</label>
        <input type="number" id="integerInput" v-model.number="integerInput">
        
        <button type="submit" class="cta-button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        stringInput: '',
        integerInput: null
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/submit-form', {
            string_input: this.stringInput, 
            integer_input: this.integerInput 
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }
    }
  }
  </script>
  
  <style>
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