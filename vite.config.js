import vue from '@vitejs/plugin-vue';
import path from 'path';
import {defineConfig} from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
    test: {
        globals: true, // Ajoutez cette ligne
        environment: 'jsdom'
    },
});
