<template>
  <!-- Avoiding page refresh/reload (@submit.prevent) -->
  <form @submit.prevent="handleSubmit">
    <input v-model="newItem" placeholder="Add new item" />
    <button type="submit">Add</button>
  </form>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '@/store/useStore';

export default {
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
