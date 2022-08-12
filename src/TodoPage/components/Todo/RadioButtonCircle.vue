<template>
  <div class="select-circle">
    <div
      @click="$emit('change', !status)"
      :class="[status ? 'filled-circle' : 'empty-circle']"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ status: boolean }>();
</script>

<style scoped lang="scss">
@use "sass:map";
@import "../../../styles/globals";

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

  background-color: map.get($theme-colors, "light-blue-color");
  background-image: url("../../../assets/check.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70%;
}
</style>
