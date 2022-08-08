<template>
  <div class='todo'>
    <div class='button-container'>
      <radio-button-circle :selected='false' />
    </div>
    <div class='title-container'>

    </div>
    <div class='button-container'>

    </div>
  </div>
</template>

<script lang='ts'>
import RadioButtonCircle from './RadioButtonCircle.vue';

export default {
  name: 'Todo',
  components: { RadioButtonCircle },
};
</script>

<style scoped lang='scss'>
@use "sass:map";
@import "../assets/globals";

.todo {
  margin: 5px;
  width: 100%;
  height: 60px;
  background: map.get($theme-colors, "secondary-color");
  border-radius: $border-radius;
  display: flex;
}

.title-container {
  margin: 0;
  padding: 0;
  width: 85%;
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
