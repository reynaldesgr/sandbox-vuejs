// State
const state = {
    userProfile: {
        name: 'Guest',
        isLoggedIn: false,
    },
    likedVideos: [],
    watchHistory: []
}


// Mutations 
const mutations = {
    SET_USER_PROFILE(state, profile) {
        state.userProfile = profile;
        state.userProfile.isLoggedIn = true;
    },
    LOGOUT(state) {
        state.userProfile.isLoggedIn = false;
    },
    ADD_TO_LIKED_VIDEOS(state, video){
        if (!state.likedVideos.find(v => v.id == video.id))
        {
            state.likedVideos.push(video);
        }
    },
    ADD_TO_HISTORY(state, video) {
        if (!state.watchHistory.find(v => v.id == video.id)){
            state.watchHistory.push(video);
        }
    }
}

// Actions
const actions = {
    login({ commit }, profile) {
        commit('SET_USER_PROFILE', profile);
    },
    logout({ commit }) {
        commit('LOGOUT');
    },
    likeVideo({ commit }, video) {
        commit('ADD_TO_LIKED_VIDEOS', video);
    },
    addToWatchHistory({ commit }, video) {
        commit('ADD_TO_HISTORY', video);
    },
};

// Getters
const getters = {
    userProfile(state) {
        return state.userProfile;
    },
    likedVideos(state) {
        return state.likedVideos;
    },
    watchHistory(state) {
        return state.watchHistory;
    },
};

export default {
    namespace: true,
    state,
    mutations,
    actions,
    getters
};
