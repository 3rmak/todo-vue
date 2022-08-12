<template>
  <div class="todo-page-container">
    <h1 class="title">To-do list</h1>
    <div class="todo-page">
      <todo-input />
      <todo-list
        class="list"
        :todoList="
          todos.filter((todo) => todo.status === TodoStatusEnum.ACTIVE)
        "
      />
      <button
        class="hide-completed-button"
        @click="changeCompletedTodosVisibility($event)"
      >
        Completed
      </button>
      <todo-list
        v-if="!isCompletedHidden"
        class="list"
        :todoList="
          todos.filter((todo) => todo.status === TodoStatusEnum.COMPLETED)
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoList from "./components/TodoList/TodoList.vue";
import TodoInput from "./components/TodoInput/TodoInput.vue";

import { onMounted, ref } from "vue";

import { useTodoStore } from "../stores/todo.store";

import { TodoDto } from "../shared/dto/todo.dto";
import { TodoStatusEnum } from "../shared/dto/todo-status.enum";

export default {
  name: "TodoPage",
  components: { TodoList, TodoInput },
  setup() {
    const { fetchTodos, getAllTodos } = useTodoStore();

    const isCompletedHidden = ref<boolean>(false);
    const todos = ref<TodoDto[]>([]);

    function changeCompletedTodosVisibility(event: Event) {
      event.preventDefault();

      isCompletedHidden.value = !isCompletedHidden.value;
    }

    onMounted(async () => {
      await fetchTodos().then(() => {
        todos.value = getAllTodos();
      });
    });

    return {
      isCompletedHidden,
      todos,
      TodoStatusEnum,
      changeCompletedTodosVisibility,
    };
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@import "../styles/globals";

.todo-page-container {
  padding: 0;
  margin: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .todo-page {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
}

.title {
  color: #535568;

  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
}

.list {
  display: flex;
  justify-content: center;

  margin-bottom: 20px;
  margin-top: 0;
}

.hide-completed-button {
  margin-top: 20px;
  margin-bottom: 20px;

  height: 30px;
  width: 14%;
  color: map.get($theme-colors, "white-color");
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border: 1px solid map.get($theme-colors, "light-blue-color");
  border-radius: 4px;
  background: map.get($theme-colors, "dark-blue-color");
}
.hide-completed-button:hover {
  background: #285c96;
}
</style>
