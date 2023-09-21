<template>
  <div>
    <div class="d-flex justify-content-between mt-5">
     
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
      this.$router.push({ name: 'TelaPrincipal' }); // Voltar para a Tela Principal
    },
  },
};
</script>