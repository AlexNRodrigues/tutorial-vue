<template>
  <div>
    <Visualizacao>
      <template #footer>
        roda pé da página
      </template>
      <template v-slot:cabecalho>
        <Cabecalho />
      </template>
      <router-view></router-view>
    </Visualizacao>
  </div>
</template>

<script setup>
import Visualizacao from "./components/Visualizacao.vue";
import Cabecalho from "./components/Cabecalho.vue";
</script>

<style></style>
