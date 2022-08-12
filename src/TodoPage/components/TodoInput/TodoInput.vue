<template>
  <div class="todo-input-container">
    <div class="plus-container">
      <span class="plus"></span>
    </div>
    <div class="input-container">
      <input
        class="todo-input"
        placeholder="Add a task"
        type="text"
        v-model="todo"
        @keyup.enter="submit($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

import { useTodoStore } from "../../../stores/todo.store";

import httpTodoService from "../../../services/http-todo.service";

export default {
  name: "TodoInput",
  setup() {
    const todo = ref<string>("");

    const { createTodo } = useTodoStore();

    async function submit(event: Event) {
      event.preventDefault();

      await httpTodoService
        .createTodo({ title: todo.value })
        .then((todo) => {
          createTodo(todo);
        })
        .catch((err) => {
          console.error(`Can not create todo, error: ${err.message}`);
        });
      todo.value = "";
    }

    return {
      todo,
      submit,
    };
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@import "../../../styles/globals";

.todo-input-container {
  margin: 5px;
  width: 74%;
  height: 60px;
  background: map.get($theme-colors, "primary-color");
  border: 1px solid map.get($theme-colors, "subsecondary-color");
  border-radius: $border-radius;
  display: flex;
}

.plus-container {
  margin: 0;
  padding: 0;
  width: 7.5%;

  display: flex;
  justify-content: center;
  align-items: center;

  .plus {
    display: inline-block;
    width: 38px;
    height: 38px;
    mask: url("../../../assets/plus.svg");
    background: map.get($theme-colors, "subsecondary-color");
  }
}

.input-container {
  width: 92.5%;
  //padding-left:
}

.todo-input {
  color: map.get($theme-colors, "mid-gray-color");
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  width: 97%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: map.get($theme-colors, "primary-color");
  border: none;

  display: flex;
  align-items: center;
}
.todo-input:focus-visible {
  outline: none;
}
</style>
