import { defineStore } from 'pinia'
import { computed, ref } from 'vue';
import { useStorage } from "@vueuse/core";

export const useLogin = defineStore('login', () => {
    // state
    const usuarioLogado = ref('');
    
    // actions
    function logarUsuario(nome) {
        usuarioLogado.value = nome;
        const storage = useStorage('usuario-logado', nome);
    }
    
    // getters
    const logado = computed(() => !!usuarioLogado.value.length);

    return {
       logarUsuario,
       usuarioLogado,
       logado
    }
})