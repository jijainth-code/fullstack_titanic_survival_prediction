import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import Vue Router
import LandingPage from './components/landing_page.vue';
import PredictPage from './components/PredictPage.vue';
import basics from './components/HelloWorld.vue';// Import PredictPage.vue

// Define routes
const routes = [
  { path: '/', component: LandingPage },
  { path: '/predict', component: PredictPage },
  { path: '/basics', component: basics} // Add route for '/predict' path
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Mount the Vue app with router
createApp(App)
  .use(router) // Use Vue Router
  .mount('#app');