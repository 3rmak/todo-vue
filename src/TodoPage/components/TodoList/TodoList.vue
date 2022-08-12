<template>
  <div class="list-container">
    <div v-for="todo in todoList" :key="todo.id">
      <todo :data="todo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Todo from "../Todo/Todo.vue";

import { TodoDto } from "../../../shared/dto/todo.dto";

defineProps<{ todoList: Array<TodoDto> }>();
</script>

<style scoped lang="scss">
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}
</style>
