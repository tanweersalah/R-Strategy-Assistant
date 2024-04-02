<template>
  <div class="container">
    <div class="search-box">
      <h2>Search Results</h2>
      <Searchbar class="search-bar" />
    </div>
    <div class="search-card-container">
      <SearchResultCard
        class="search-card"
        v-for="(car, index) in cars"
        :key="index"
        :image-url="car.imageUrl"
        :details="car.details"
      />
    </div>
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import SearchResultCard from "../components/SearchResultCard.vue";

export default {
  components: {
    SearchResultCard,
    Searchbar,
  },
  data() {
    return {
      cars: [
        {
          imageUrl:
            "../src/assets/demo-images/WG__Bilder_Golf_V/20231017_131955.jpg",
          details: [
            { label: "Make", value: "Toyota" },
            { label: "Model", value: "Camry" },
            { label: "Year", value: "2022" },
            { label: "Color", value: "Silver" },
            { label: "Mileage", value: "10,000 miles" },
            { label: "Fuel Type", value: "Gasoline" },
            { label: "Engine Size", value: "2.5L" },
            { label: "Transmission", value: "Automatic" },
            { label: "Drive Type", value: "Front-wheel drive" },
            { label: "Condition", value: "Used" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
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
