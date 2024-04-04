<template>
  <div class="container">
    <div class="back-container">
      <p>⬅ Back to Search</p>
    </div>
    <SearchResultCard
      class="search-card"
      :image-url="cars.imageUrl"
      :detailsData="cars.detailsData"
      :viewDetailsButton="false"
    />

    <div class="tab-container">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: activeButton === index }"
        @click="setActiveButton(index)"
      >
        <i :class="button.icon"></i>
        <span>{{ button.text }}</span>
      </button>
    </div>
    <div class="component-container">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import SearchResultCard from "../components/SearchResultCard.vue";
import VehicleDetails from "../components/VehicleDetails.vue";
import TechnicalDetails from "../components/TechnicalDetails.vue";

export default {
  components: {
    SearchResultCard,
    VehicleDetails,
    TechnicalDetails,
  },
  computed: {
    activeComponent() {
      return this.buttons[this.activeButton].component;
    },
  },
  methods: {
    setActiveButton(index) {
      this.activeButton = index;
    },
  },
  data() {
    return {
      activeButton: 0,
      buttons: [
        {
          text: "Vehicle Details",
          icon: "fa fa-user",
          component: VehicleDetails,
        },
        {
          text: "Data Provisioning of Components and Materials",
          icon: "fa fa-heart",
          component: TechnicalDetails,
        },
        {
          text: "Technical Assessment",
          icon: "fa fa-star",
          component: VehicleDetails,
        },
        {
          text: "Environmental Assessment",
          icon: "fa fa-envelope",
          component: VehicleDetails,
        },
        { text: "Feedback", icon: "fa fa-cog", component: VehicleDetails },
      ],
      cars: {
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
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.back-container {
  display: flex;
  justify-content: start;

  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.back-container p {
  margin: 5px;
  margin-left: 10px;
  font-size: 12px;
}

.tab-container {
  padding: 5px;
  display: flex;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 10px;
}

.tab-container button {
  padding: 2px;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: rgb(251, 252, 253);
  color: #000000;
}

.tab-container button:hover {
  background-color: #00b3184d;
}

.tab-container button.active {
  background-color: #0057b370;
}

.tab-container button i {
  margin-right: 5px;
}

.component-container {
  margin-top: 20px;
}

.button-container button span {
  flex-grow: 1;
  text-align: center;
  white-space: normal; /* Allow text wrapping */
}
</style>
