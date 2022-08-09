<template>
  <div class="app">
    <h1 class="title">To-do list</h1>
    <list class="list" />
  </div>
</template>

<script setup lang="ts">
import List from './components/List.vue';
</script>

<style scoped lang="scss">
.app {
  padding: 0;
  margin: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
