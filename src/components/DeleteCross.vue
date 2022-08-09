<template>
  <span class="cross" @click="$emit('delete')"></span>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use 'sass:map';
@import '../styles/globals';

.cross {
  display: inline-block;
  width: 20px;
  height: 20px;
  mask: url('../assets/window-close.svg');
  background: map.get($theme-colors, 'mid-gray-color');
}
.cross:hover,
.cross:focus {
  background: map.get($theme-colors, 'light-gray-color');
}
</style>
