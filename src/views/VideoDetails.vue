<template>
  <div v-if="selectedVideo" class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mb-4 text-center text-amber-50">{{ selectedVideo.title }}</h1>
    
    <p class="text-lg mb-6 text-amber-50">{{ selectedVideo.description }}</p>
    
    <p class="mb-8 text-amber-50">Views: {{ selectedVideo.views }}</p>
    
    <ul class="space-y-4">
      <li
          v-for="comment in comments"
          :key="comment.id"
          class="bg-white shadow-lg rounded-lg p-4"
      >
        <p class="font-semibold text-lg text-gray-800 mb-2">{{ comment.author }}</p>
        <p class="text-gray-600">{{ comment.comment }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      newComment: ''
    }
  },
  computed: {
    ...mapGetters('video', ['selectedVideo', 'comments'])
  },
  methods: {
    ...mapActions('video', ['fetchVideoDetails', 'postComment', 'fetchComments']),
    postComment(){
      this.postComment({ content: this.newComment, author: 'User'});
      this.newComment = 'New Comment';
    }
  },
  created() {
    const videoId = this.$route.params.id;
    this.fetchVideoDetails(videoId);
    this.fetchComments(videoId);
  }
}
</script>