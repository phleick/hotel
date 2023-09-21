<template>
    <div id="app">
      <div class="d-flex justify-content-between mt-5">
        <button class="btn btn-primary" @click="goTo('TelaPrincipal')">Tela Principal</button>
        <button class="btn btn-primary" @click="goTo('CadastroCliente')">Cadastro de Cliente</button>
        <button class="btn btn-primary" @click="goTo('PainelAdmin')">Painel Admin</button>
        <button class="btn btn-primary" @click="goTo('QuartosHotel')">Quartos Hotel</button>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName });
      },
    },
  };
  </script>