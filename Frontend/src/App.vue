<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import LoginSplash from "./components/LoginSplash.vue";
import SplashScreenView from "./views/SplashScreenView.vue";
</script>

<template>
  <div>
    <!-- Splash Screen -->
    <div v-if="showSplashScreen" class="splash-screen">
      <LoginSplash />
    </div>

    <!-- Main App Content -->
    <transition name="fade">
      <div v-if="!showSplashScreen" class="app-container">
        <div class="header"><TheHeader /></div>

        <div class="router-view"><RouterView /></div>

        <div class="footer">
          <TheFooter id="footer" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSplashScreen: true,
    };
  },
  mounted() {
    if (sessionStorage.getItem("splashScreenShown") === "true") {
      this.showSplashScreen = false;
    } else {
      setTimeout(() => {
        this.showSplashScreen = false;
        sessionStorage.setItem("splashScreenShown", "true");
      }, 3000);
    }
  },
};
</script>

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
