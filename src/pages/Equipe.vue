<template>
  <div>
    <h2>Equipe</h2>

    <div v-for="cargo in cargos" :key="cargo.id">
      {{ cargo.cargo }} - {{ cargo.first_name }}
      <button @click="store.removerCargo(cargo.id)">Remover</button>
    </div>
  </div>
</template>

<script setup>
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();
const { cargos } = storeToRefs(store);
</script>

<style scoped></style>
