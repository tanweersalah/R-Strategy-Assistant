<template>
  <div
    class="search-result-card"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="image-container">
      <img :src="imageUrl" alt="Image" class="thumbnail" />
    </div>
    <div class="details-container">
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Vehicle Brand</div>
          <div class="detail-value">{{ detailsData.kbaNumber }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Vehicle Model</div>
          <div class="detail-value">{{ detailsData.vehicleBrand }}</div>
        </div>

        <div class="detail-column">
          <div class="detail-label">Production Period</div>
          <div class="detail-value">{{ detailsData.fuelType }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Fuel Type</div>
          <div class="detail-value">{{ detailsData.firstRegistration }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">KBA Number</div>
          <div class="detail-value">
            {{ detailsData.certificateOfRegistration }}
          </div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Catena-X ID</div>
          <div class="detail-value">{{ detailsData.internalReference }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">VIN</div>
          <div class="detail-value">{{ detailsData.vehicleModel }}</div>
        </div>

        <div class="detail-column">
          <div class="detail-label">First Registration</div>
          <div class="detail-value">{{ detailsData.vin }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Mileage</div>
          <div class="detail-value">{{ detailsData.mileage }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Certificate of Decommisioning</div>
          <div class="detail-value">{{ detailsData.damage }}</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Certificate of Decommisioning</div>
          <div class="detail-value">{{ detailsData.damage }}</div>
        </div>
      </div>
    </div>
    <div class="button-container" v-if="viewDetailsButton" v-show="isHovered">
      <button class="view-details-button" @click="redirectToDetails">
        View Details
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: String,
    detailsData: Object,
    viewDetailsButton: Boolean,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    redirectToDetails() {
      this.$router.push("/detail-page");
    },
  },
};
</script>

<style scoped>
.search-result-card {
  display: flex;

  max-height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  align-items: center;
  position: relative; /* Added */
}

.thumbnail {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

.image-container {
  padding: 10px;
  width: 25%;
  border-radius: 5px;
}

.details-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  
  padding: 2px;
  justify-content: space-around;
}

.detail-row {
  display: flex;
}

.detail-column {
  flex: 1 1 50%;
  padding: 5px;
}

.detail-label {
  color: #000; /* Blue color for labels */
  font-size: 10px;
  font-weight: bold;
}

.detail-value {
  color: #767D93;
  font-size: 10px;
}

.button-container {
  width: 10%;
  display: grid;
  justify-content: center;
  align-items: center;
}

.action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.button-container {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.099);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out 3s;
  transition-delay: 1s;
}

.view-details-button {
  padding: 8px 16px;
  background-color: #32b38a4d;
  color: rgb(42, 30, 30);
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.search-result-card:hover .button-container {
  opacity: 1;
}
</style>
