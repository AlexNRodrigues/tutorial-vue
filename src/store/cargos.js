import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useCargos = defineStore('cargos', () => {
    // state
    const cargos = ref([]);
    // actions
    const adicionaCargo = (funcionario) => {
        cargos.value = cargos.value.filter((x) => x.id !== funcionario.id);
        cargos.value.push(funcionario);
    }
    const removerCargo = (id) => {
        cargos.value = cargos.value.filter((x) => x.id !== id);
    }

    // getters
    const totalCargos = computed(() => cargos.value.length);

    return {
        adicionaCargo,
        removerCargo,
        totalCargos,
        cargos
    }
})