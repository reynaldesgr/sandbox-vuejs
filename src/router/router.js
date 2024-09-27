// Imports
import HomeFeed from "@/views/HomeFeed.vue";
import VideoDetails from "@/views/VideoDetails.vue";
import { createRouter, createWebHistory } from "vue-router";
import PiniaStore from "@/views/PiniaStore.vue";

// Routes définies pour le routeur
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeFeed
    },
    {
        path: '/video/:id',
        name: 'Videos',
        component: VideoDetails
    },
    {
        path: '/test/pinia',
        name: 'Pinia Store',
        component: PiniaStore
    }
];

// Création de l'instance du routeur
const router = createRouter({
    // Utilisation de l'historique HTML5
    history: createWebHistory(),
    routes
});

// Exportation du routeur pour l'utiliser dans l'application Vue
export default router;
