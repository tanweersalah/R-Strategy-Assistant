<template>
  <div class="main-container container">
    <div class="info-box">
      <div class="overlay"></div>
      <div class="overly_description">
        <h1>About CE-ASSISTANT :</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eveniet
          vero cum omnis corporis labore vitae pariatur nemo deserunt.
          Praesentium accusantium consequuntur deleniti quidem nesciunt, enim
          quibusdam cum porro beatae?
        </p>
      </div>
    </div>
    <div class="search-box">
      <img
        alt="R Strategy logo"
        class="r-strategy-logo"
        src="@/assets/ce-assistant_logo.png"
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
</template>

<script>
import { inject } from "vue";
import Searchbar from "../components/Searchbar.vue";

export default {
  components: { Searchbar },
  data() {
    return {
      auth: inject("authentication"),
    };
  },
};
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(173, 181, 172, 0.056);
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;

  background-color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.348);
  border-radius: 20px;
  box-shadow: 1px 0px 5px rgb(195, 192, 192);
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.info-box {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 20px;
}

.overlay {
  width: 100%;
  height: 100%;
  filter: blur(2px);
  background-image: url("https://transmetal.co.uk/wp-content/uploads/2016/10/junkyard-1501245_1920.jpg");
  background-size: cover;
  background-position: center;
  grid-area: 1 / 1 / 2 / 2;
  border-radius: 20px 0 0 20px;
}
.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background: rgba(26, 18, 18, 0.438); /* Semi-transparent black overlay */
}
.overly_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  width: 100%;
  height: 100%;
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;
  padding: 50px;
}

.search-box {
  width: 100%;
  height: 100%;
  border: 1px black;
  background-color: white;
  box-shadow: 1px 0px 5px rgb(195, 192, 192);
  border-radius: 0 20px 20px 0;
  z-index: 0;
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
