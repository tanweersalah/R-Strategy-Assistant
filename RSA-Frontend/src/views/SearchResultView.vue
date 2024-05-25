<template>
  <div class="container">
    <div class="search-box">
      <h2>Search Results</h2>
      <Searchbar class="search-bar" />
    </div>
    <div class="search-card-container">
      <!-- <SearchResultCard
        class="search-card"
        v-for="(car, index) in cars"
        :key="index"
        :image-url="car.imageUrl"
        :detailsData="car.detailsData"
        :viewDetailsButton="true"
      /> -->

      <GridLayoutTest class="grid_card" />
    </div>

    
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import SearchResultCard from "../components/SearchResultCard.vue";
import GridLayoutTest from '../components/GridLayoutTest.vue';

export default {
  components: {
    SearchResultCard,
    Searchbar,
    GridLayoutTest
  },
  data() {
    return {
      cars: [
        {
          imageUrl:
            "../src/assets/demo-images/WG__Bilder_Golf_V/20231017_131955.jpg",
          detailsData: {
            kbaNumber: "OBASX12312AS",
            vehicleBrand: "Volkswagen",
            fuelType: "Diesel",
            firstRegistration: "12.12.2020",
            certificateOfRegistration: "OBASX12312AS",
            internalReference: "UP1273S23",
            vehicleModel: "GOLF",
            vin: "124451SX12AS",
            mileage: "123478",
            damage: "Accident Vehicle",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>

.grid_card{
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
}
.search-box {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.262);
  height: 40px;
}
.search-box h2 {
  font-size: 15px;
  padding-left: 10px;
}

.search-bar {
  margin-right: 15px;
  width: 30%;
  height: 70%;
}

.search-card-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-card {
  width: 90%;
  height: 40%;
}
</style>
