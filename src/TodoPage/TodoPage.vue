<template>
  <div class="todo-page-container">
    <div class="todo-page">
      <h1 class="title">To-do list</h1>
      <todo-input />
      <todo-list class="list" :todoList="todos" />
      <!--      <todo-list class="list" :todoList="activeTodos" />-->
      <br />
      <br />
      <!--      <todo-list class="list" :todoList="completedTodos" />-->
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

    const todos = ref<TodoDto[]>([]);

    const activeTodos = ref<TodoDto[]>([]);
    const completedTodos = ref<TodoDto[]>([]);

    onMounted(async () => {
      await fetchTodos().then(() => {
        todos.value = getAllTodos();

        activeTodos.value = todos.value.filter(
          (todo) => todo.status == TodoStatusEnum.ACTIVE,
        );
        completedTodos.value = todos.value.filter(
          (todo) => todo.status == TodoStatusEnum.COMPLETED,
        );
      });
    });

    return {
      todos,
      activeTodos,
      completedTodos,
    };
  },
};
</script>

<style scoped lang="scss">
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
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
}
</style>
