// This file contains the different VueX stores.

import {createStore} from "vuex";
import {createPinia} from "pinia";
import video from "@/store/modules/video";
import user from "@/store/modules/user";

const store = createStore({
    modules: {
        video,
        user,
    }
})

const pinia = createPinia();

export {store, pinia };