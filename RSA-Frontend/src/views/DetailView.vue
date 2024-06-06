<template>
  <div class="main-container">
    <div class="container back-container" @click="redirectToSearch">
      <p>⬅ Back to Search</p>
    </div>
    <SearchResultCard
      class="search-card"
      :image-url="cars.imageUrl"
      :detailsData="cars.detailsData"
      :viewDetailsButton="false"
    />
    <hr />
    <div class="container tab-container">
      <div
        class="button-container"
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: activeButton === index }"
        @click="setActiveButton(index)"
      >
        <i :class="button.icon"></i>
        <span>{{ button.text }}</span>
      </div>
    </div>
    <hr />
    <div class="container component-container">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import SearchResultCard from "../components/SearchResultCard.vue";
import VehicleDetails from "../components/VehicleDetails.vue";
import TechnicalDetails from "../components/TechnicalDetails.vue";
import DataProvisioning from "../components/DataProvisioning.vue";
import DigitalTwinUpdate from "../components/DigitalTwinUpdate.vue";
import Feedback from "../components/Feedback.vue";

export default {
  components: {
    SearchResultCard,
    VehicleDetails,
    TechnicalDetails,
    DigitalTwinUpdate,
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

    redirectToSearch() {
      this.$router.push("/search");
    },
  },
  data() {
    return {
      activeButton: 0,
      buttons: [
        {
          text: "Vehicle Details",
          icon: "fa fa-info-circle",
          component: VehicleDetails,
        },
        {
          text: "Data Provisioning of Components and Materials",
          icon: "fa fa-database",
          component: DataProvisioning,
        },
        {
          text: "Technical Assessment",
          icon: "fa fa-cogs",
          component: TechnicalDetails,
        },
        {
          text: "Environmental Assessment",
          icon: "fa fa-globe",
          component: VehicleDetails,
        },
        {
          text: "Digital Twin Update",
          icon: "fa fa-globe",
          component: DigitalTwinUpdate,
        },
        { text: "Feedback", icon: "fa fa-comments", component: Feedback },
      ],
      cars: {
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
    };
  },
};
</script>

<style scoped>
hr {
  width: 100%;
}
.back-container {
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: start;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.back-container p {
  margin: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.main-container {
  width: 100vw;
  flex-direction: column;
  display: flex;
  align-items: center;
}
.tab-container {
  padding: 15px 30px 10px 30px;
  display: flex;
  justify-content: center;

  gap: 20px;

  margin-bottom: 10px;
}

.tab-container .button-container {
  display: flex;
  justify-content: space-around;

  align-items: center;
  text-align: center;
  padding: 8px 10px 8px 10px;
  margin: 0px 0px 0px 0px;
  font-size: 10px;

  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #cccccc21;
  background-color: #d9d9d97f;
  color: #000000;
}
.button-container i {
  font-size: 18px;
}
.tab-container .button-container:hover {
  background-color: #0057b370;
}

.tab-container .button-container.active {
  background-color: #00b3184d;
}

.tab-container .button-container i {
  margin-right: 5px;
}

.component-container {
  margin: 20px;
}

.button-container button span {
  flex-grow: 1;
  text-align: center;
  white-space: normal; /* Allow text wrapping */
}
</style>
