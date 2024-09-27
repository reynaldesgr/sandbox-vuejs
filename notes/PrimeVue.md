## PrimeVue
PrimeVue est une bibliothèque de composants UI pour Vue.js qui propose un ensemble de composants prêts à l'emploi.

### Installation
``` 
pnpm install primevue primeicons
pnpm add @primevue/themes
```

### PrimeVue Configuration
``` 
// main.js
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
```