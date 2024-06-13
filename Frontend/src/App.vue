<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="app-container">
    <div class="header"><TheHeader /></div>

    <div class="router-view"><RouterView /></div>

    <div class="footer">
      <TheFooter id="footer" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
}

.router-view {
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;

  box-shadow: 0 2px 4px rgba(2, 2, 2, 0.2);
}

.footer {
  background-color: #f3fcf0;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}
</style>
