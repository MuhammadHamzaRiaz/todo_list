<template>
  <div>
    <h1>Todo List</h1>
    <div>
      <form @submit.prevent="addToList">
        <input type="text" v-model="todo" />
        <button type="submit">Add to List</button>
      </form>
    </div>
    <ul>
      <li v-for="item in lists" :key="item.id">
        {{ item.name }}
        <button @click.prevent="deleteFromList(item.id)">delete</button>
      </li>
      <li v-if="lists.length === 0">No lists yet</li>
    </ul>
  </div>
</template>
<script setup>
import { useListStore } from "~/store/list-store";

const store = useListStore();

const lists = computed(() => store.listItems);
const todo = ref("");
const addToList = () => {
  store.addToList({
    name: todo.value,
    id: Date.now(),
    completed: false,
  });
  todo.value = "";
};
const deleteFromList = (id) => {
  store.deleteFromList(id);
};
</script>
