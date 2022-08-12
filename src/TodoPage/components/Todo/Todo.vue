<template>
  <div class="todo">
    <div class="button-container">
      <radio-button-circle
        @change="(val) => changeCompleteStatusTodo(val)"
        :status="statusCompleted()"
      />
    </div>
    <div class="title-container">
      <p :class="statusCompleted() ? 'completed-todo' : ''">{{ todo.title }}</p>
    </div>
    <div class="button-container">
      <delete-cross @delete="removeTodo()" />
    </div>
  </div>
</template>

<script lang="ts">
import RadioButtonCircle from "./RadioButtonCircle.vue";
import DeleteCross from "./DeleteCross.vue";

import { toRef } from "vue";

import httpTodoService from "../../../services/http-todo.service";
import { useTodoStore } from "../../../stores/todo.store";

import { TodoStatusEnum } from "../../../shared/dto/todo-status.enum";

export default {
  name: "Todo",
  props: {
    data: {
      id: String,
      status: String,
      title: String,
    },
  },
  components: { DeleteCross, RadioButtonCircle },
  setup(props) {
    const { deleteTodo, updateTodoStatus } = useTodoStore();

    const todo = toRef(props, "data");

    async function changeCompleteStatusTodo(completed: boolean) {
      todo.value.status = completed
        ? TodoStatusEnum.COMPLETED
        : TodoStatusEnum.ACTIVE;
      console.log("changed to", completed);
      console.log("todo.value.status", todo.value.status);

      await httpTodoService
        .patchStatusById(todo.value.id, todo.value.status)
        .then(() => {
          updateTodoStatus(todo.value.id, todo.value.status);
        })
        .catch((err) => {
          console.error(`Can not patch todo, error: ${err.message}`);
        });
    }

    async function removeTodo() {
      console.log("destroy");
      await httpTodoService
        .deleteTodoById(todo.value.id)
        .then(() => {
          deleteTodo(todo.value.id);
        })
        .catch((err) => {
          console.error(`Can not delete todo, error: ${err.message}`);
        });
    }

    function statusCompleted(): boolean {
      return todo.value.status === TodoStatusEnum.COMPLETED;
    }

    return {
      todo,
      statusCompleted,
      removeTodo,
      changeCompleteStatusTodo,
    };
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@import "../../../styles/globals";

.todo {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: 60px;
  background: map.get($theme-colors, "secondary-color");
  border-radius: $border-radius;
  display: flex;
}

.todo:hover {
  background: map.get($theme-colors, "subsecondary-color");
}

.title-container {
  margin: 0;
  padding: 0;
  width: 85%;

  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  .completed-todo {
    text-decoration-line: line-through;
    color: map.get($theme-colors, "light-gray-color");
  }
}

.button-container {
  margin: 0;
  padding: 0;
  width: 7.5%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
