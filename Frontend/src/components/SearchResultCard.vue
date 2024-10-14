<template>
  <div>
    <div class="container card-container">
      <div class="item image-container">
        <q-img
          :src="`/demo-images/${imageUrl}`"
          alt="Image"
          class="thumbnail"
        />
      </div>
      <div class="sub_heading heading_1">
        Product Specific Data
        <cx-tooltip tooltip_image="catena">{{
          tooltipData.productData
        }}</cx-tooltip>
      </div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Manufacturer</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.vehicleBrand
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.vehicleBrand }}

          <q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Model</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{
              tooltipData.vehicleModel
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.vehicleModel
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
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

        <div class="value-sub-grid">
          {{ detailsData.productionPeriod
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Fuel Type</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">{{ tooltipData.fuelType }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.fuelType }}</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">KBA Number</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="info">{{ tooltipData.kba }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">{{ detailsData.kbaNumber }}</div>
      </div>
      <div></div>

      <hr class="border-line" />
      <div class="detail-button">
        <q-btn v-if="viewDetails" @click="redirectToDetails">
          View Details
        </q-btn>
      </div>
      <div class="sub_heading heading_2">
        Instance Specific Data
        <cx-tooltip tooltip_image="catena">{{
          tooltipData.instanceData
        }}</cx-tooltip>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Catena X - ID</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="info">{{
              tooltipData.catenaxID
            }}</cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.catenaxID
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />​
        </div>
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
        <div class="value-sub-grid">
          {{ detailsData.vin
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">First Registration</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="catena">
              {{ tooltipData.firstRegistration }}
            </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.firstRegistration
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Mileage</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="info">
              {{ tooltipData.mileage }}
            </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          {{ detailsData.mileage
          }}<q-img class="catenaLogo" :src="catenaLogo()" alt="" />
        </div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">PCF Data</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="info">
              {{ tooltipData.pcfData }}
            </cx-tooltip>
          </div>
        </div>
        <div class="value-sub-grid">
          <span class="text-red" v-if="viewDetails">To be requested</span>
          <q-btn v-if="!viewDetails" outline class="pcf-button"
            >Request PCF Data</q-btn
          >
        </div>
      </div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">
          <div class="key-sub-grid-text">Status</div>
          <div class="source-info-sub-grid">
            <cx-tooltip tooltip_image="info">
              {{ tooltipData.status }}</cx-tooltip
            >
          </div>
        </div>
        <div class="value-sub-grid">
          <span class="text-red" v-if="viewDetails">To be updated</span>
          <q-select
            v-if="!viewDetails"
            filled
            v-model="selectedStatus"
            :options="statusOptions"
            dense
            options-dense
            class="status-dropdown"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import CxTooltip from "./CxTooltip.vue";
import catena_info from "@/assets/catena-logo.jpg";

export default {
  components: { CxTooltip },
  props: {
    imageUrl: String,
    detailsData: Object,
    viewDetails: Boolean,
  },
  data() {
    return {
      mockService: inject("mockService"),
      tooltipData: null,
      selectedStatus: "Select Status",
      statusOptions: [
        "Overhauled",
        "Decomissioned",
        "Option C",
        "Option D",
        "Option E",
      ],
    };
  },
  beforeMount() {
    this.tooltipData = this.mockService.getTooltipData("resultCard");
  },
  methods: {
    catenaLogo() {
      return catena_info;
    },
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
.text-red {
  color: rgb(194, 15, 15);
}
.status-dropdown {
  width: 80%;

  font-size: 10px;
}
.pcf-button {
  color: #1c58d9;
  width: 70%;
  padding: 0px;
  font-size: 10px;
}
.thumbnail {
  height: 200px;
  width: 20vw;
  max-width: 160px;
  max-height: 200px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
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
  font-size: 0.7rem;
  font-weight: bold;
  width: fit-content;
}

.value-sub-grid {
  margin-right: 10px;

  font-size: clamp(0.5rem, 1vw, 0.9rem);
  color: #767d93;
}
.image-container {
  display: flex;
  justify-content: center;
  align-self: center;
  grid-area: 1 / 1 / -1 / 1;
  margin: 5px;
}

.catenaLogo {
  margin-left: 3px;
  margin-bottom: 1px;
  width: 10vw;
  height: auto;
  min-width: 5px;
  max-width: 10px;
  border-radius: 3px;
}
.sub_heading {
  font-size: 0.6rem;
  gap: 5px;
  display: flex;
  margin-bottom: 5px;
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
  width: 80%;
  height: fit-content;
  border: 1px solid #ccc;
  background-color: #8db759bb;
  box-shadow: 2px 4px 5px rgb(115, 110, 110);
  border-radius: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  font-size: clamp(0.5rem, 1vw, 0.7rem);
}
.detail-button button:hover {
  box-shadow: 2px 2px 5px rgb(115, 110, 110);
}
</style>
