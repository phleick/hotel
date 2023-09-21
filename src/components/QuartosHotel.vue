<template>
    <div>
      <div class="text-center mt-5">
        
      </div>
      <router-view></router-view>
      
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName });
      },
      voltar() {
        // Use this.$router.push para retornar à página principal
        this.$router.push({ name: 'TelaPrincipal' });
      },
    },
  };
  </script>