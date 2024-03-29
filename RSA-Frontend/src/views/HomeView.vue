<script setup>
import Searchbar from "../components/Searchbar.vue";
</script>

<template>
  <div class="main-container">
    <div class="container">
      <div class="info-box">
        <div class="overlay">
          <h1>Text Overlay</h1>
        </div>
      </div>
      <div class="search-box">
        <img
          alt="R Strategy logo"
          class="r-strategy-logo"
          src="@/assets/logo-v.jpg"
        />
        <Searchbar class="search-bar" />
        <div class="help">
          Need help? Read our Get
          <a
            class="advanced-search-link"
            href="https://portal.int.demo.catena-x.net/documentation/"
            >Started Guide</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  background-color: rgba(173, 181, 172, 0.056);
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  background-color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.348);
  border-radius: 20px;
  box-shadow: 1px 0px 5px rgb(195, 192, 192);
  width: 90%;
  height: 70%;
  overflow: hidden;
}
.info-box {
  width: 50%;
  height: 100%;

  background-image: url("https://transmetal.co.uk/wp-content/uploads/2016/10/junkyard-1501245_1920.jpg");
  background-size: cover;
  background-position: center;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Semi-transparent background */
  backdrop-filter: blur(2px); /* Blur effect */

  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color */
}

.search-box {
  width: 50%;
  height: 100%;
  border: 1px black;
  background-color: white;
  box-shadow: 1px 0px 5px rgb(195, 192, 192);

  padding-top: 0%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  align-items: center;
}

.r-strategy-logo {
  width: 40%;
  padding-top: 40px;
}
h1 {
  font-size: 16px;
}

.help {
  font-size: 10px;
}
</style>
