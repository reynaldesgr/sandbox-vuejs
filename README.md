# Sandbox - VueJs (v.3)
## Vue.JS : Basis
- Framework JavaScript
- SPA (Single Page Application)
```
src/
├── assets/ : images, logo
├── components/ : Vue components, shared across the app
├── router/ : Vue Router configuration
├── views/ : larger Vue components, different views in the app
├── App.vue : Root Vue component, serves as the main component
└── main.js : entry point for the Vue app, where the Vue instance is created 
              and mounted to the DOM
```
## Life Cycle Hooks

| Hook                    | Description                                                                 | Moment d'exécution               |
|-------------------------|-----------------------------------------------------------------------------|----------------------------------|
| `beforeCreate`          | Appelé avant que l'instance soit créée. Les données, méthodes et watchers ne sont pas encore accessibles. | Juste avant la création de l'instance |
| `created`               | Appelé après que l'instance ait été créée. Les données et les méthodes sont accessibles, mais le DOM n'est pas encore monté. | Après la création de l'instance  |
| `beforeMount`           | Appelé juste avant que le montage de l'instance commence. Le rendu du DOM n'est pas encore effectué. | Avant le premier rendu           |
| `mounted`               | Appelé une fois que l'instance est montée, c'est-à-dire que le DOM est maintenant disponible. | Après le premier rendu           |
| `beforeUpdate`          | Appelé avant que le DOM soit mis à jour, lorsque les données réactives changent. | Avant chaque mise à jour         |
| `updated`               | Appelé après que le DOM a été mis à jour en réponse à des changements dans les données. | Après chaque mise à jour         |
| `beforeDestroy`         | Appelé juste avant que l'instance soit détruite. C'est le bon endroit pour effectuer un nettoyage. | Avant la destruction              |
| `destroyed`             | Appelé après que l'instance a été détruite. Les données, méthodes et observateurs ne sont plus accessibles. | Après la destruction              |
| `activated`             | Appelé lorsqu'un composant activé est rendu dans une application utilisant `<keep-alive>`. | Lors de l'activation              |
| `deactivated`           | Appelé lorsqu'un composant désactivé est rendu dans une application utilisant `<keep-alive>`. | Lors de la désactivation          |
| `errorCaptured`         | Appelé lorsqu'une erreur est capturée dans un composant enfant. Permet de gérer les erreurs de manière centralisée. | Lors de la capture d'erreurs     |
| `serverPrefetch`        | Appelé lors du rendu côté serveur pour précharger des données. Utile pour les applications isomorphiques. | Avant le rendu côté serveur      |
| `beforeRouteEnter`      | Appelé avant qu'une route soit entrée. Peut être utilisé pour charger des données nécessaires avant de rendre le composant. | Lors de la navigation vers la route |
| `beforeRouteUpdate`     | Appelé avant qu'une route soit mise à jour. Utile pour gérer les changements de paramètres de route. | Lors de la mise à jour de la route |
| `beforeRouteLeave`      | Appelé avant qu'une route soit quittée. Permet de prévenir la navigation ou de réaliser des actions de nettoyage. | Lors de la navigation hors de la route |

```vue 
export default {
    data() {
        return { 
            msg: "Hello"
        };
    },
    mounted() {
        console.log('Component is mounted.')
    },
    methods: {
        fetchData() {
            (...)
        }
    }
}
```

------
```
// Créer une nouvelle instance Vue
new Vue({
  // Élément dans lequel monter l'instance
  el: '#app',

  // Données de l'instance
  data() {
    return {
      message: 'Bonjour, Vue!'
    };
  },

  // Méthodes de l'instance
  methods: {
    greet() {
      alert(this.message);
    }
  },

  // Hooks du cycle de vie
  created() {
    console.log('L\'instance a été créée.');
  },

  mounted() {
    console.log('L\'instance est montée.');
  },

  beforeDestroy() {
    console.log('L\'instance va être détruite.');
  }
});
```
## Data binding
| Type de Data Binding       | Description                                                                                         | Exemple                                     |
|----------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------|
| **Interpolation**          | Affiche des données dans le template avec des doubles accolades (`{{ }}`).                          | `<h1>{{ message }}</h1>`                    |
| **Binding d'attributs**    | Lie des attributs HTML à des données avec `v-bind` ou `:`.                                         | `<img :src="imageUrl" alt="Image dynamique" />` |
| **Binding des événements**  | Lien d'événements à des méthodes avec `v-on` ou `@`.                                               | `<button @click="greet">Cliquez-moi</button>` |
| **Binding des formulaires** | Crée une liaison bidirectionnelle entre un élément de formulaire et une propriété avec `v-model`.  | `<input v-model="username" placeholder="Entrez votre nom" />` |
| **Liaison réactive**       | Synchronise automatiquement les changements de données et met à jour la vue.                      | Modifications dans `data` se répercutent dans la vue. |
| **Class Binding**          | Ajoute ou enlève des classes CSS dynamiquement en fonction des données.                            | `<div :class="{ active: isActive }"></div>` |
| **Style Binding**          | Applique des styles en ligne dynamiquement à l'élément en fonction des données.                    | `<div :style="{ color: activeColor }"></div>` |
| **Computed Properties**    | Propriétés dérivées qui se mettent à jour automatiquement lorsque leurs dépendances changent.      | `computed: { fullName() { return this.firstName + ' ' + this.lastName; } }` |
| **Watchers**               | Observateurs qui réagissent aux changements de données et exécutent une fonction en réponse.        | `watch: { username(newVal) { console.log(newVal); } }` |
#### computed:
```
<template>
  <div>
    <input v-model="firstName" placeholder="Prénom" />
    <input v-model="lastName" placeholder="Nom" />
    <p>Nom complet : {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>
```
### watchers:
```
<template>
  <div>
    <input v-model="username" placeholder="Nom d'utilisateur" />
    <p>Nom d'utilisateur : {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    };
  },
  watch: {
    username(newValue, oldValue) {
      console.log(`Le nom d'utilisateur a changé de ${oldValue} à ${newValue}`);
      // Vous pouvez ici appeler une API ou effectuer une action
    }
  }
};
</script>
```

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue router
``` 
pnpm i vue-router@4 
```
### Tailwind
```
pnpm add -D tailwindcss@latest postcss@latest autoprefixer@
npx tailwindcss init -p
```