<template>
  <div class='app'>
    <h1 class='title'>Hello, this is to do list</h1>
    <list class='list' />
  </div>
</template>

<script setup lang="ts">
import List from './components/List.vue';
</script>

<style scoped lang='scss'>
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
}

.list {
  display: flex;
  justify-content: center;
}
</style>
