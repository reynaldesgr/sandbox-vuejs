<template>
  <!-- Avoiding page refresh/reload (@submit.prevent) -->
  <form @submit.prevent="handleSubmit">
    <input class="w-fl md:w-1/12 p-2 border border-gray-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-2" v-model="newItem" placeholder="Add new item" />
    <Button class="text-gray-700 text-lg mb-6 hover:underline" type="submit">Add</Button>
  </form>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '@/store/useStore';
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  setup() {
    const store = useStore();
    // Takes an inner value and returns a reactive and mutable ref object, which has a single property .value that points to the inner value
    const newItem = ref('');

    const handleSubmit = () => {
      if (newItem.value.trim()) {
        store.addItem(newItem.value);
        newItem.value = ''; 
      }
    };

    return {
      newItem,
      handleSubmit,
      items: store.items,
    };
  },
};
</script>
