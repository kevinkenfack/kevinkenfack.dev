<template>
    <div class="maintenance-page">
      <h1>Le site est en maintenance</h1>
      <p>Nous reviendrons bientôt. Merci pour votre patience.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MaintenancePage',
  });
  </script>
  
  <style scoped>
  .maintenance-page {
    text-align: center;
    padding: 100px;
    font-family: Arial, sans-serif;
  }
  
  .maintenance-page h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .maintenance-page p {
    font-size: 1.2rem;
  }
  </style>
  