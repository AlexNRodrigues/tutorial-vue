<template>
  <div>
    <h1 v-if="logado" class="titulo">Logado com - {{ usuarioLogado }}</h1>
    <h1 v-else class="titulo">Nome no Cabecalho</h1>

    {{  isDark }}
    <button @click="toggleDark()">
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
    
    <br/>
    <br/>
    <!-- <Aviso/> -->
    <br/>
    
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia';
import { useLogin } from "../store/login";
// import Aviso from "./Aviso.vue";

const storeLogin = useLogin();
const { usuarioLogado, logado } = storeToRefs(storeLogin);

const isDark = useDark({
  selector: 'body',
  attribute: 'color-schema',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)

</script>

<style>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
