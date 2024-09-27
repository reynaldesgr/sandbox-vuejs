<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-center text-amber-50">Home Feed</h1>

    <form class="mb-8 flex justify-center" @submit.prevent="search">
      <input
          type="text"
          v-model="searchQuery"
      placeholder="Search..."
      class="w-full text-amber-50 md:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" class="ml-2 p-2 bg-blue-500 text-white rounded-lg">Search</button>
    </form>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li v-for="video in filteredVideoList" :key="video.id" class="bg-white shadow-lg rounded-lg p-4">
        <h3 class="text-xl font-semibold mb-2">{{ video.title }}</h3>
        <p class="text-gray-600 mb-4">Views: {{ video.views }}</p>
        <router-link
            :to="'/video/' + video.id"
            class="text-blue-500 hover:underline"
        >
          Check details
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      searchQuery: '', 
    };
  },
  computed: {
    ...mapGetters('video', ['videoList']),
    
    filteredVideoList() {
      if (this.searchQuery) {
        return this.videoList.filter(video =>
            video.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.videoList;
    },
  },
  methods: {
    ...mapActions('video', ['fetchVideoList']),
  },
  created() {
    this.fetchVideoList(); 
  },
};
</script>
