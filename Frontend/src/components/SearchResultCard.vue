<template>
  <div>
    <div class="container card-container">
      <div class="item image-container">
        <img :src="`/demo-images/${imageUrl}`" alt="Image" class="thumbnail" />
      </div>
      <div class="sub_heading heading_1">Product Specific Data</div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Vehicle Brand</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.vehicleBrand
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.vehicleBrand }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Vehicle Model</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.vehicleModel
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.vehicleModel }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Production Period</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.productionPeriod
            }}</cx-tooltip>
          </div>
        </div>

        <div class="value-sub-grid">{{ detailsData.productionPeriod }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Fuel Type</div>
          <div class="source-info-sub-grid">
            <cx-tooltip v-show="false" tooltip_image="catena"></cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.fuelType }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">KBA Number</div>
          <div class="source-info-sub-grid">
            <cx-tooltip v-show="false" tooltip_image="catena"></cx-tooltip>
          </div>
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
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Catena X - ID</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.catenaxID
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.catenaxID }}​</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">VIN</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">
              {{ tooltipData.vin }}
            </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.vin }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">First Registration</div>
          <div class="source-info-sub-grid">
            <cx-tooltip v-show="false" tooltip_image="catena"></cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.firstRegistration }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Certificate of Decomisioning</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">
              {{ tooltipData.certificateOfDecomisioning }}
            </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.certificateOfDecomisioning }}
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Mileage</div>
          <div class="source-info-sub-grid">
            <cx-tooltip v-show="false" tooltip_image="catena"></cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.mileage }}</div>
      </div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Damage</div>
          <div class="source-info-sub-grid">
            <cx-tooltip v-show="false" tooltip_image="catena"> </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.damage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import CxTooltip from "./CxTooltip.vue";

export default {
  components: { CxTooltip },
  props: {
    imageUrl: String,
    detailsData: Object,
    viewDetailsButton: Boolean,
  },
  data() {
    return {
      mockService: inject("mockService"),
      tooltipData: null,
    };
  },
  beforeMount() {
    this.tooltipData = this.mockService.getTooltipData("resultCard");
  },
  methods: {
    redirectToDetails() {
      sessionStorage.setItem(
        "vehicleDetails",
        JSON.stringify({
          detailsData: this.detailsData,
          imageUrl: this.imageUrl,
        })
      );
      this.$router.push("/detail/" + this.detailsData.vin);
    },
  },
};
</script>

<style scoped>
.card-container {
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  margin: 5px 0px 15px 0px;
  display: grid;

  height: fit-content;

  grid-template-rows: fit-content(100%) 1.5fr 0.6fr fit-content(100%) 1.5fr;
  grid-template-columns: fit-content(100%) repeat(6, 1fr);
  grid-gap: 1px 1px;
  padding: 5px;
  background-color: #f7f7f7;
}

.info-sub-grid {
  font-size: 0.6rem;
  display: grid;
  grid-gap: 1px 1px;
  grid-template-rows: 10px span;
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
  display: flex;
  gap: 10px;
  margin-right: 20px;
  font-weight: bold;
}

.key-sub-grid-text {
  font-size: 0.65rem;
  font-weight: bold;
  width: fit-content;
}

.value-sub-grid {
  margin-right: 10px;
  font-size: 0.7rem;
  color: #767d93;
}
.image-container {
  display: flex;
  justify-content: center;
  align-self: center;
  grid-area: 1 / 1 / -1 / 1;
  margin: 5px;
}

.image-container img {
  width: auto;
  height: auto;
  min-width: 80px;
  max-width: 120px;
  max-height: 200px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.sub_heading {
  font-size: 0.6rem;
}

.heading_1 {
  grid-area: 1/2/1/-1;
}

.heading_2 {
  grid-area: 4/2/5/-1;
  position: relative;
  bottom: 8px;
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
  height: fit-content;
}

.detail-button button {
  width: 90%;
  height: fit-content;
  border: 1px solid #ccc;
  background-color: #8db759bb;
  box-shadow: 2px 4px 5px rgb(115, 110, 110);
  border-radius: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
}
.detail-button button:hover {
  box-shadow: 2px 2px 5px rgb(115, 110, 110);
}
</style>
