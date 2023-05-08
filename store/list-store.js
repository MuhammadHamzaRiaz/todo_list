import { defineStore } from "pinia";

export const useListStore = defineStore("toDoList", {
  state: () => ({
    list: [],
  }),

  getters: {
    listItems: (state) => {
      return state.list;
    },
  },

  actions: {
    addToList(item) {
      this.list.push(item);
    },
    deleteFromList(id) {
        console.log(id);
        this.list = this.list.filter((item) => item.id !== id);
    },
  },
});
