<template>
  <div>
    <div class="container">
      <div class="item image-container">
        <img :src="imageUrl" alt="Image" class="thumbnail" />
      </div>
      <div class="sub_heading heading_1">Product Specific Data</div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">Vehicle Brand</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.vehicleBrand }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Vehicle Model</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.vehicleModel }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Production Period</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.productionPeriod }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Fuel Type</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.fuelType }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">KBA Number</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.kbaNumber }}</div>
      </div>
      <div></div>

      <hr class="border-line" />
      <div class="detail-button">
        <button v-if="viewDetailsButton" @click="redirectToDetails">
          View Details
        </button>
      </div>
      <div class="sub_heading heading_2">Instance Specific Data</div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Catena X - ID</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.catenaxID }}​</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">VIN</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.vin }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">First Registration</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.firstRegistration }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Certificate of Decomisioning</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">
          {{ detailsData.certificateOfDecomisioning }}
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Mileage</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.mileage }}</div>
      </div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">Damage</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">{{ detailsData.damage }}</div>
      </div>
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
.container {
  border-radius: 15px;
  font-size: 1em;
  border: 1px solid #ccc;
  margin: 10px;
  display: grid;
  width: 90vw;
  height: 200px;
  grid-template-rows: 1fr 2fr 1fr 1fr 2fr;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 3px 3px;
  padding: 5px;
}

.info-sub-grid {
  font-size: 0.6rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: repeat(2, 1fr);
}
.source-info-sub-grid {
  justify-items: start;
  grid-area: 1/2/1/2;
}
.source-info-sub-grid img {
  margin-top: 1px;
  width: 10vw;
  height: auto;
  min-width: 5px;
  max-width: 12px;
}

.key-sub-grid {
  font-weight: bold;
}

.value-sub-grid {
  color: #767d93;
}
.image-container {
  display: flex;
  justify-content: center;
  grid-area: 1 / 1 / -1 / 1;
}

.image-container img {
  width: auto;
  height: auto;
  min-width: 80px;
  max-width: 120px;

  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.sub_heading {
  font-size: 0.5rem;
}

.heading_1 {
  grid-area: 1/2/1/-1;
}

.heading_2 {
  grid-area: 4/2/4/-1;
}

.border-line {
  align-self: center;
  color: #ccc;
  height: 0.1px;
  width: 100%;
  grid-area: 3/2/3/-2;
}

.detail-button {
  grid-area: 3/7/3/7;
}

.detail-button button {
  width: 100%;
  height: 110%;
  border: 1px solid #ccc;
  background-color: #81bb3933;
  border-radius: 20px;

  font-size: 1vw;
}
</style>
