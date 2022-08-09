<template>
  <div class="todo">
    <div class="button-container">
      <RadioButtonCircle
        @change="(val) => changeCompleteStatusTodo(val)"
        :selected="todo.completed"
      />
    </div>
    <div class="title-container">
      <p :class="todo.completed ? 'completed-todo' : ''">{{ todo.title }}</p>
    </div>
    <div class="button-container">
      <DeleteCross @delete="removeTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import RadioButtonCircle from './RadioButtonCircle.vue';
import DeleteCross from './DeleteCross.vue';

import { ref } from 'vue';
import { TodoDto } from './todo.dto';

export default {
  components: { RadioButtonCircle, DeleteCross },

  setup() {
    const todo = ref<TodoDto>({
      id: '1',
      title: 'some title',
      completed: false,
    });

    return {
      todo,
    };
  },

  methods: {
    changeCompleteStatusTodo(status: boolean) {
      this.todo.completed = status;
      console.log('changed to', status);
    },
    removeTodo() {
      console.log('destroy');
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:map';
@import '../styles/globals';

.todo {
  margin: 5px;
  width: 100%;
  height: 60px;
  background: map.get($theme-colors, 'secondary-color');
  border-radius: $border-radius;
  display: flex;
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
    color: map.get($theme-colors, 'light-gray-color');
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
