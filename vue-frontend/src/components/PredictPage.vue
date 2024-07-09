<template>
  <div class="main">
    <header>
      <nav>
        <router-link to="/"><button class="btn">Home</button></router-link>
        <h1 class="text">Titanic Survivor Prediction App</h1>
        <router-link to="/basics"><button class="btn">Learn Basics</button></router-link>
      </nav>
    </header>

    <main>
      

      <div class="form">
        <form @submit.prevent="submitForm" class="form-container">
          <div class="form-group">
            <label for="dropdown1">Passenger Class</label>
            <select id="dropdown1" v-model="dropdown1" required>
              <option disabled value="">Please select one</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dropdown2">Sex</label>
            <select id="dropdown2" v-model="dropdown2" required>
              <option disabled value="">Please select one</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>

          <div class="form-group">
            <label for="dropdown3">Embarked</label>
            <select id="dropdown3" v-model="dropdown3" required>
              <option disabled value="">Please select one</option>
              <option value="0">Cherbourg</option>
              <option value="1">Queenstown</option>
              <option value="2">Southampton</option>
            </select>
          </div>

          <div class="form-group">
            <label for="slider1">Age (1-100):</label>
            <input type="range" id="slider1" v-model.number="slider1" min="1" max="100" required />
            <span>{{ slider1 }}</span>
          </div>

          <div class="form-group">
            <label for="slider2">Fare $ (1-520):</label>
            <input type="range" id="slider2" v-model.number="slider2" min="1" max="520" required />
            <span>{{ slider2 }}</span>
          </div>

          <div class="form-group">
            <label for="dropdown5">Travelled Alone</label>
            <select id="dropdown5" v-model="dropdown5" required>
              <option disabled value="">Please select one</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>

          <div class="foot">
            <div class="form-group">
              <label for="dropdown4">Model Selection</label>
              <select id="dropdown4" v-model="dropdown4" required>
                <option disabled value="">Please select one</option>
                <option value="logistic_regression">Logistic Regression</option>
                <option value="support_vector_machine">Support Vector Machine</option>
                <option value="k_nearest_neighbors">K-Nearest Neighbour</option>
                <option value="gaussian_naive_bayes">Guassian Naive Bayes</option>
                <option value="perceptron">Perceptron</option>
                <option value="stochastic_gradient_descent">Stochastic Gradient Descent</option>
                <option value="decision_tree">Decision Tree</option>
                <option value="random_forest">Random Forest</option>
              </select>
            </div>

            <button type="reset" class="btn" @click="resetForm">Reset</button>
            <button type="submit" class="btn">Submit</button>
          </div>

          <div class="result" v-if="result !== null">
            <h3>Result</h3>
            <span>{{ ans }}</span>
          </div>
        </form>
      </div>

      <div class="history">
        <div class="header">
          <h1>History</h1>
          <p>Past 5 User search history</p>
        </div>

        <div class="display" v-if="history.length">
          <div class="details" v-for="(entry, index) in history" :key="index">
            <div>Passenger Class: {{ entry.pclass }} , Sex: {{ entry.sex }} , Age: {{ entry.age }} , Fare: {{ entry.fare }} , Travelled alone: {{ entry.traveled_alone }} , Embarked: {{ entry.embarked }} , Model: {{ entry.model }} , Result: {{ entry.result }}
            </div>
          </div>
          <button type="reset" class="btn" @click="clearHistory">Reset History</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dropdown1: 1,
      dropdown2: 1,
      dropdown3: 1,
      dropdown4: 1,
      dropdown5: 1,
      slider1: 1,
      slider2: 1,
      result: null,
      ans: null,
      history: [],
      current: {}
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`http://127.0.0.1:8080/surv_or_not/${this.dropdown4}`, {
          pclass: this.dropdown1,
          sex: this.dropdown2,
          age: this.slider1,
          fare: this.slider2,
          traveled_alone: this.dropdown5,
          embarked: this.dropdown3
        });
        this.result = response.data["survived"];
        console.log(this.result);
        if (this.result) {
          this.ans = "The passenger will survive.";
        } else {
          this.ans = "The passenger will not survive.";
        }

        this.current = {
          pclass: this.dropdown1,
          sex: this.dropdown2,
          age: this.slider1,
          fare: this.slider2,
          traveled_alone: this.dropdown5,
          embarked: this.dropdown3,
          model: this.dropdown4,
          result: this.ans
        };
        this.history.unshift(this.current);
        if (this.history.length > 5) {
          this.history.pop();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },

    resetForm() {
      this.dropdown1 = "";
      this.dropdown2 = "";
      this.dropdown3 = "";
      this.dropdown4 = "";
      this.dropdown5 = "";
      this.slider1 = 1;
      this.slider2 = 1;
      this.result = null;
      this.ans = null;
    },

    clearHistory() {
      this.history = [];
    }
  }
};
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

.main {
  font-family: "Poppins", sans-serif;
  background-color: #18181b;
  padding-top: 2vh;
  color: #fff;
}

header {
  background-color: #1f2937;
  padding: 2rem;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
}

h1.text {
  /* margin-bottom: 1rem; */
  text-align: center;
  width: 100%;
}

.btn {
  width: 15rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #1d4ed8;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
}

.btn:hover {
  background-color: #1e40af;
}

main {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  padding: 1rem;
  width: 100%;
}

.history,
.form {
  width: 100%;
  max-width: 800px;
  margin: 1rem 1rem;
  border: 2px solid white;
  border-radius: 50px;
  padding: 1rem;
}

/* .history {
  flex: 1;
} */

.history .header {
  padding: 1rem;
  margin: 1rem;
  border-radius: 50px;
  background-color: rgba(0, 0, 255, 0.128);
  font-size: 1rem;
}

.display .details {
  padding: 1rem;
  background-color: rgba(0, 0, 255, 0.128);
  border-radius: 20px;
  margin: 1rem 0;
}

.history .display {
  padding: 1rem;
  margin: 1rem;
  border: 2px solid white;
  border-radius: 40px;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1f2937;
  border-radius: 50px;
  padding: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.7rem;
}

label {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

select,
input[type="range"] {
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid #ffffff;
  background-color: #111827;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

select:focus,
input[type="range"]:focus {
  border-color: #1b6ad3;
}

input[type="range"] {
  appearance: none;
  width: 100%;
  background: transparent;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  background: #0ccd12;
  border-radius: 5px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 20px;
  background: #1d4ed8;
  border-radius: 100% 100% 0% 0%;
  cursor: grab;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 5px;
  background: transparent;
  border-color: transparent;
  border-width: 5px 0;
  color: transparent;
}

.foot {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.result {
  padding: 1rem;
  background-color: #111827;
  border-radius: 1rem;
  text-align: center;
}

.result h3 {
  color: #0ccd12;
}

@media (max-width: 768px) {


  main{
    flex-direction: column;
  }

  .history,
  .form {
    width: 100%;
    margin: 1rem 0;
  }

  .btn {
    width: 100%;
    padding: 0.5rem 1rem;
  }

  .foot {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 480px) {

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  main{
    flex-direction: column;
  }

  header nav {
    flex-direction: column;
  }

  h1.text {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .form-container {
    padding: 1rem;
  }

  label {
    font-size: 1rem;
  }
}
</style>
