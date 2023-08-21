<template>
  <div>
    <div class="selecionados">
      <span v-for="ps in pessoasSelecionadas" :key="ps.id" class="card">
        {{ ps.first_name }}
      </span>
    </div>
    <div v-if="carregando">
      <h3>Carregando....</h3>
    </div>
    <div v-else>
      <div v-if="!error" class="pessoas">
        <div v-for="pessoa in pessoas" :key="pessoa.id">
          <button @click="redirecionaFuncionario(pessoa.id)" class="botao">ver Funcionario</button>
          <Usuario
            :pessoa="pessoa"
            :selecao="idSelecionado(pessoa.id)"
            @selecao="adicionarSelecao"
          ></Usuario>
        </div>
      </div>
      <div v-else>
        {{ error }}
      </div>
    </div>
    <Teleport to="#alerta">
      <transition>
        <Alerta v-if="mostraAlerta"></Alerta>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref, watchEffect } from "vue";
import Usuario from "./Usuario.vue";
import { useFetch } from "../composables/fetch";
import { useRouter } from "vue-router";
import Alerta from "./Alerta.vue";

const router = useRouter();

const mostraAlerta = ref(false);

const {
  data: pessoas,
  error,
  carregando,
} = useFetch(`https://reqres.in/api/users?page=2`);

const idsSelecao = ref([]);
const aviso = "Em caso de dúvida tente novamente";

const adicionarSelecao = (evento) => {
  if (idSelecionado(evento)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== evento);
    return;
  }
  mostraAlerta.value = true;
  idsSelecao.value.push(evento);
};

const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((x) => idSelecionado(x.id));
});

const idSelecionado = (id) => {
  return idsSelecao.value.includes(id);
};

const redirecionaFuncionario = (id) => {
  router.push(`/equipe/${id}`);
}

provide("aviso", aviso);
</script>

<style scoped>
.selecionados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.selecionados > span {
  background: #6fd6d6;
  padding: 5px;
  font-size: 0.785rem;
  border-radius: 5px;
}
.pessoas {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.perfil {
  width: 150px;
  text-align: center;
}
.perfil img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}
.perfil span {
  display: block;
  font-size: 0.75rem;
}
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: gray;
}
.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
button:disabled,
button[disabled] {
  border: 1px solid #999;
  background-color: #ccc;
  color: #666;
  cursor: default;
}
</style>
