import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        items: [],
    }),
    actions: {
        addItem(item) {
            this.items.push(item);
        }
    }
})