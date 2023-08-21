<template>
  <div>
    <div v-if="carregado">
      Carregando...
    </div>
    <div v-else>
      <Usuario :pessoa="pessoa"></Usuario>
      <select v-model="cargoSelecionado">
        <option disabled value="">Selecione o cargo</option>
        <option v-for="cargo in cargos" :key="cargo" :value="cargo">{{ cargo }}</option>
      </select>
      <div>
        <button @click="storeLogin.logarUsuario(pessoa.first_name)">Logar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Usuario from "../components/Usuario.vue";
import { useFetch } from "../composables/fetch";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useCargos } from "../store/cargos";
import { useLogin } from "../store/login";

const store = useCargos();
const {adicionaCargo} = store;

const storeLogin = useLogin();

const route = useRoute();
const id = route.params.id;

const { data: pessoa, carregado } = useFetch(`https://reqres.in/api/users/${id}`);

const cargoSelecionado = ref(``);
const cargos = ['Gerência', 'Supervisão', 'Operacional'];

watch(cargoSelecionado, (novoCargo) => {
  const {id, first_name} = pessoa.value;

  const funcionario = {id, first_name, cargo: novoCargo};
  adicionaCargo(funcionario);
});

</script>

<style scoped></style>
