// This file contains the different VueX stores.

import {createStore} from "vuex";

const store = createStore({
    modules: {
        video,
        user,
    }
})

export default store;