<template>
  <div v-if="selectedVideo">
    <h1> {{ selectedVideo.title }} </h1>
    <p> {{ selectedVideo.description }} </p>
    <p> Views : {{ selectedVideo.views }} </p>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.author }}: {{ comment.comment }}
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