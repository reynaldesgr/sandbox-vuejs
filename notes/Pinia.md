## Pinia

Pinia est une bibliothèque de gestion d'état pour Vue.js, qui a été conçue pour remplacer Vuex (la bibliothèque de gestion d'état précédente de Vue).

### Installation
``` 
pnpm add pinia
```

## How to use it
### Pinia Configuration

```
>> store > index.js
const pinia = createPinia() 

// Export Pinia
export default pinia;

>> @ > main.js
app.use(pinia);
```
### Create a store (rep. 'store')
```
export const useStore = defineStore(...)
```