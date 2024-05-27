<template>
  <div>
    <h1>Predict Page</h1>
    <router-link to="/"><button class="cta-button">Back 🤛🏼</button></router-link>

    <!-- Combined form with dropdowns and sliders -->
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="dropdown1">Select Option 1:</label>
        <select id="dropdown1" v-model="dropdown1" required>
          <option disabled value="">Please select one</option>
          <option value="Option 1A">Option 1A</option>
          <option value="Option 1B">Option 1B</option>
          <option value="Option 1C">Option 1C</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dropdown2">Select Option 2:</label>
        <select id="dropdown2" v-model="dropdown2" required>
          <option disabled value="">Please select one</option>
          <option value="Option 2A">Option 2A</option>
          <option value="Option 2B">Option 2B</option>
          <option value="Option 2C">Option 2C</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dropdown3">Select Option 3:</label>
        <select id="dropdown3" v-model="dropdown3" required>
          <option disabled value="">Please select one</option>
          <option value="Option 3A">Option 3A</option>
          <option value="Option 3B">Option 3B</option>
          <option value="Option 3C">Option 3C</option>
        </select>
      </div>

      <div class="form-group">
        <label for="slider1">Select a value (1-50):</label>
        <input type="range" id="slider1" v-model.number="slider1" min="1" max="50" required>
        <span>{{ slider1 }}</span>
      </div>

      <div class="form-group">
        <label for="slider2">Select a value (1-50):</label>
        <input type="range" id="slider2" v-model.number="slider2" min="1" max="50" required>
        <span>{{ slider2 }}</span>
      </div>

      <button type="submit" class="cta-button">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dropdown1: '',
      dropdown2: '',
      dropdown3: '',
      slider1: 1,
      slider2: 1
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/submit-form', {
          dropdown1: this.dropdown1,
          dropdown2: this.dropdown2,
          dropdown3: this.dropdown3,
          slider1: this.slider1,
          slider2: this.slider2
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
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
}

.cta-button:hover {
  background-color: #1f9d55; /* Darker green on hover */
}
</style>
