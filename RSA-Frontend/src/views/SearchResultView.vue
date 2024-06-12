<template>
  <div class="main-container">
    <div class="container search-box">
      <h2>Search results for VIN : {{ searchQuery }}</h2>
      <Searchbar class="search-bar" />
    </div>
    <hr />
    <div class="container search-card-container">
      <SearchResultCard
        v-if="searchResult != null"
        class="grid_card"
        :image-url="searchResult.imageUrl"
        :detailsData="searchResult.detailsData"
        :viewDetailsButton="true"
      />
      <div v-else><h2>No result found</h2></div>
    </div>
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import SearchResultCard from "../components/SearchResultCard.vue";
import { inject } from "vue";

export default {
  components: {
    SearchResultCard,
    Searchbar,
  },

  data() {
    return {
      mockService: inject("mockService"),
      searchResult: null,
      searchQuery: null,
      serachResults: [
        {
          imageUrl:
            "../src/assets/demo-images/WG__Bilder_Golf_V/20231017_131955.jpg",
          detailsData: {
            kbaNumber: "0603ADK",
            vehicleBrand: "Volkswagen",
            fuelType: "Diesel",
            firstRegistration: "12.12.2005",
            certificateOfDecomisioning: "Issued",
            vehicleModel: "GOLF",
            vin: "WVWZZZ1KZ6W098546",
            mileage: "123478",
            damage: "Accident Vehicle",
            catenaxID: "580d3adf-1981-44a0-​a214-13d6ceed9379​",
            productionPeriod: "10/2003 - 2008",
          },
        },
      ],
    };
  },
  beforeMount() {
    this.searchQuery = this.$route.query.q;
    this.searchResult = this.mockService.getResultByVIN(this.searchQuery);
  },
  watch: {
    // Watch the $route object for changes
    "$route.query.q": function (newQuery) {
      this.searchQuery = newQuery;
      this.searchByVIN(); // Call a method to update the search results
    },
  },
  methods: {
    searchByVIN() {
      this.searchResult = this.mockService.getResultByVIN(this.searchQuery);
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
hr {
  width: 100%;
}
.search-box {
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;

  height: 40px;
}
.search-box h2 {
  justify-self: start;
  font-size: 15px;
  padding-left: 10px;
}

.search-bar {
  justify-self: end;
  margin-right: 15px;
  width: 50%;
  height: 90%;
}

.search-card-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
