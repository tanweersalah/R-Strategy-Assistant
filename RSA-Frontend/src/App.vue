<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="app-container">
    <TheHeader class="header-footer" />

    <div class="router-view"><RouterView /></div>

    <TheFooter class="header-footer" />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
}

.router-view {
  height: 1px;
  flex-grow: 1;
  position: relative;
}

.header-footer {
  flex-shrink: 0;
}
</style>
