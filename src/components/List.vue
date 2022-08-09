<template>
  <div class='list-container'>
    <todo />
    <todo />
    <todo />
    <todo />
  </div>
</template>

<script lang='ts'>
import Todo from './ToDo.vue';

export default {
  name: 'List',
  components: { Todo },
};
</script>

<style scoped lang='scss'>
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 74%;
}
</style>
