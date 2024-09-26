// Store for videos. Include the state related to the list of videos.

// State
const state = {
    videoList: [],
    selectedVideo: null,
    comments: [],
}

// Mutations
const mutations = {
    SET_VIDEO_LIST(state, videos) {
        state.videoList = videos;
    },
    SET_SELECTED_VIDEO(state, selectedVideo) {
        state.selectedVideo = selectedVideo;
    },
    ADD_COMMENT(state, comments) {
        state.comments = comments;
    }
}

// Actions
const actions = {
    fetchVideoList({ commit }) {
        // Simulate an API call
        const videos = [ 
            { id: 1, title: 'Vue.JS - Tutorial', views: 150}, 
            {id: 2, title: 'PrimeVue - Tutorial', views: 500 }
        ];
        // Commit 
        commit('SET_VIDEO_LIST', videos);
    },
    fetchVideoDetails({commit}, videoId) {
        // Simulate an API call
        if (videoId === '1') {
            const video = {id: 1, title: 'Vue.JS - Tutorial', views: 150, description: 'Tutorial for beginners.'};
            commit('SET_SELECTED_VIDEO', video)
        } else {
            const video = {id: 2, title: 'PrimeVue - Tutorial', views: 200, description: 'Tutorial for beginners.'};
            commit('SET_SELECTED_VIDEO', video)
        }
    },
    postComment({ commit }, comment) {
        commit('ADD_COMMENT', comment);
    },
    fetchComments({ commit }, videoId) {
        // Simulate an API call
        const comments = [
            { id: 1, videoId: videoId, content: 'Super vidéo!', author: 'User1' },
            { id: 2, videoId: videoId, content: 'Merci pour le tutoriel.', author: 'User2' },
        ];
        commit('SET_COMMENTS', comments);
    },
}

// Getters
const getters = {
    videoList(state) {
        return state.videoList;
    },
    selectedVideo(state) {
        return state.selectedVideo;
    },
    comments(state) {
        return state.comments;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};