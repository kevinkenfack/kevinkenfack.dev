<template>
    <div class="maintenance">
      <h1>Le site est actuellement en maintenance</h1>
      <p>Nous serons de retour bientôt. Merci pour votre patience !</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'MaintenancePage',
  })
  </script>
  
  <style scoped>
  .maintenance {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  