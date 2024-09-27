import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import {store} from "@/store";
import {pinia} from "@/store";
import './assets/styles/tailwind.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createApp(App)
    .use(store)
    .use(pinia)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(router)
    .mount('#app')

