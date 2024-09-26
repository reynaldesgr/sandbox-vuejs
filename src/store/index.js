// This file contains the different VueX stores.

import {createStore} from "vuex";
import video from "@/store/modules/video";
import user from "@/store/modules/user";

const store = createStore({
    modules: {
        video,
        user,
    }
})

export default store;