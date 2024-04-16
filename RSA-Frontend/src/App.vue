<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="app-container">
    <TheHeader class="header-footer" />

    <div class="router-view"><RouterView /></div>

    <TheFooter class="header-footer" id="footer" />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}

.router-view {
  flex: 1 0 auto;
  position: relative;
}

.header-footer {
  flex-shrink: 0;
}
</style>
