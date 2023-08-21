<template>
    <div>
        <h1 ref="titulo">Página não encotrada!</h1>
        <Aviso></Aviso>
    </div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import Aviso from "../components/Aviso.vue";

const titulo = ref(null);
const avisoref = ref(null);

onMounted(() => {
    console.log(titulo.value);
    titulo.value.style.color = 'blue';
});

provide('aviso', 'Página Inválida');
</script>

<style scoped>

</style>