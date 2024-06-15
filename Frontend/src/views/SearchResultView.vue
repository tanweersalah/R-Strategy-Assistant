<template>
  <div class="main-container">
    <div class="container search-box">
      <h2>Search results for VIN : {{ searchQuery }}</h2>
      <Searchbar class="search-bar" />
    </div>
    <hr />
    <div class="container search-card-container">
      <transition-group name="search-card" tag="div">
        <div v-if="searchResult" :key="searchResult.detailsData.vin">
          <SearchResultCard
            class="grid_card"
            :image-url="searchResult.imageUrl"
            :detailsData="searchResult.detailsData"
            :viewDetailsButton="true"
          />
        </div>
        <div v-else-if="searchCompleted && !searchResult" :key="searchQuery">
          <h2>No result found</h2>
        </div>
        <div v-else class="loading"><HalfCircleSpinner /></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
import SearchResultCard from "../components/SearchResultCard.vue";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";
import { inject } from "vue";

export default {
  components: {
    SearchResultCard,
    Searchbar,
    HalfCircleSpinner,
  },

  data() {
    return {
      mockService: inject("mockService"),
      searchResult: null,
      searchQuery: null,
      searchCompleted: false,
    };
  },
  beforeMount() {
    this.searchQuery = this.$route.query.q;
    this.searchByVIN();
  },
  watch: {
    // Watch the $route object for changes
    "$route.query.q": function (newQuery) {
      this.searchQuery = newQuery;
      this.searchByVIN(); // Call a method to update the search results
    },
  },
  methods: {
    async searchByVIN() {
      this.searchResult = null;
      this.searchCompleted = false;
      // Simulate a delay

      this.searchResult = await this.mockService.getResultByVIN(
        this.searchQuery
      );
      this.searchCompleted = true;
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

/* Transition classes for search-card */
.search-card-enter-from,
.search-card-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.search-card-enter-to,
.search-card-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.search-card-enter-active {
  transition: all 0.5s ease;
}
.search-card-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.search-card-move {
  transition: all 0.6s ease;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
