<template>
  <div>
    <h1> Home Feed </h1>
    <form>
      <input type="text" placeholder="Search...">
    </form>
    <ul>
      <li v-for="video in videoList" :key="video.id">
        <h3> {{video.title }}</h3>
        <p> Views : {{ video.views }}</p>
        <router-link :to="'/video/' + video.id">Check details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters('video', ['videoList']),
  },
  methods: {
    ...mapActions('video', ['fetchVideoList']),
  },
  created() {
    this.fetchVideoList();
  },
};
</script>