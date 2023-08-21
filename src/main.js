import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import NavBar from './components/NavBar.vue';
import router from './router';

import './css/style.css';

const app = createApp(App);
app.component('NavBar', NavBar);
app.directive("email", {
    created(el, biding) {
        el.style.color = 'red';
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
    }
});

const pinia = createPinia();
app.use(pinia)

app.use(router);
app.mount('#app');