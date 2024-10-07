<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
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
      <q-layout view="lHh lpr lFf" container class="shadow-2 app-container">
        <div v-if="!showSplashScreen">
          <Header />
          <q-scroll-area class="page-container">
            <div class="home-container">
              <div class="router-view"><RouterView /></div>
              <div class="footer">
                <TheFooter />
              </div>
            </div>
          </q-scroll-area>
        </div>
      </q-layout>
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
  min-height: 100vh;
  width: 100vw;
}

.page-container {
  height: 100vh;
  width: 100vw;
  padding-top: 70px;
}

.home-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  width: 100vw;
}

.router-view {
  flex: 1 0 auto !important;
  display: flex;
  justify-content: center;
}

.footer {
  flex-shrink: 0;
  background-color: #f3fcf0;
  width: 100%;
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
