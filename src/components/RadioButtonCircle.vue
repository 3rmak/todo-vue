<template>
  <div class='select-circle'>
    <div :class="[selected ? 'filled-circle' : 'empty-circle']">
    </div>
  </div>
</template>

<script lang='ts'>
import { defineProps } from 'vue';

defineProps<{ selected: boolean }>();

export default {
  name: 'RadioButtonCircle',
  props: ['selected'],
};
</script>

<style scoped lang='scss'>
@use "sass:map";
@import "../assets/globals";

.select-circle {
  width: 20px;
  height: 20px;
}

.empty-circle {
  width: 100%;
  height: 100%;
  border-radius: 100%;

  border: 2px solid map.get($theme-colors, "dark-gray-color");
}

.filled-circle {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: map.get($theme-colors, "light-blue-color");
}
</style>
