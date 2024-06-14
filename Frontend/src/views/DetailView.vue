<template>
  <div class="main-container">
    <div class="container back-container" @click="redirectToSearch">
      <p>⬅ Back to Search</p>
    </div>
    <SearchResultCard
      class="search-card"
      :detailsData="vehicleData.detailsData"
      :image-url="vehicleData.imageUrl"
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
      <transition name="detail-component" appear>
        <keep-alive><component :is="activeComponent"> </component></keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import SearchResultCard from "../components/SearchResultCard.vue";
import VehicleDetails from "../components/VehicleDetails.vue";
import TechnicalDetails from "../components/TechnicalDetails.vue";
import DataProvisioning from "../components/DataProvisioning.vue";
import DigitalTwinUpdate from "../components/DigitalTwinUpdate.vue";
import EnvironmentalAssessment from "../components/EnvironmentalAssessment.vue";
import Feedback from "../components/Feedback.vue";

import { provide } from "vue";

export default {
  components: {
    SearchResultCard,
    VehicleDetails,
    TechnicalDetails,
    DigitalTwinUpdate,
  },
  props: ["vin"],

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
  beforeMount() {
    provide("vin", this.vin);
    this.vehicleData = JSON.parse(sessionStorage.getItem("vehicleDetails"));

    console.log(this.vehicleData);
    console.log(this.vehicleData.imageUrl);
    console.log(this.vin);
  },
  data() {
    return {
      vehicleData: JSON.parse(sessionStorage.getItem("vehicleDetails")),
      activeButton: 0,
      createdComponents: {},
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
          component: EnvironmentalAssessment,
        },
        {
          text: "Digital Twin Update",
          icon: "fa fa-globe",
          component: DigitalTwinUpdate,
        },
        { text: "Feedback", icon: "fa fa-comments", component: Feedback },
      ],
    };
  },
};
</script>

<style scoped>
.detail-component-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.detail-component-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.detail-component-enter-active {
  transition: all 0.6s ease;
}

.detail-component-leave-active {
  transition: all 0.6s ease;
  position: absolute;
}
.detail-component-move {
  transition: all 0.6s ease;
}

.detail-component-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.detail-component-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
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
