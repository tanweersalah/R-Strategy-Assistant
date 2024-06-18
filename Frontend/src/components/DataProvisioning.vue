<template>
  <div class="component-main-container container">
    <BaseContainer class="base-container" title="Images">
      <template #content>
        <div v-if="productData" class="images-container">
          <img :src="`/demo-images/${engineImage}`" alt="engine image" />
        </div>
        <div v-else class="loading"><HalfCircleSpinner /></div>
      </template>
    </BaseContainer>
    <BaseContainer class="base-container" title="Engine Information">
      <template #content>
        <div v-if="productData" class="engine-info-container">
          <div class="section-heading product">Product Specific Data</div>

          <div class="section-items">
            <div class="item-key">Product Name</div>
            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                {{ tooltipData.productName }}</cx-tooltip
              >
            </div>

            <div class="item-value">
              {{ productData.productSpecificData.productName }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">OE Number</div>

            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                {{ tooltipData.oeNumber }}</cx-tooltip
              >
            </div>

            <div class="item-value">
              {{ productData.productSpecificData.oeNumber }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Weight (kg)</div>

            <div class="info-icon">
              <cx-tooltip v-show="false" tooltip_image="catena">
                {{ tooltipData.catenaXId }}</cx-tooltip
              >
            </div>

            <div class="item-value">
              {{ productData.productSpecificData.weightKg }}
            </div>
          </div>
          <hr />

          <div class="section-heading instance">Instance Specific Data</div>

          <div class="section-items">
            <div class="item-key">Catena-X ID</div>
            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                {{ tooltipData.catenaxID }}</cx-tooltip
              >
            </div>

            <div class="item-value">
              {{ productData.instanceSpecificData.catenaXId }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Serial Number</div>

            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                {{ tooltipData.serialNumber }}</cx-tooltip
              >
            </div>

            <div class="item-value">
              {{ productData.instanceSpecificData.serialNumber }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Year of Manufacturing</div>
            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                <li>{{ tooltipData.yearOfManufacturing }}</li>
              </cx-tooltip>
            </div>

            <div class="item-value">
              {{ productData.instanceSpecificData.yearOfManufacturing }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Mileage (km)</div>
            <div class="info-icon">
              <cx-tooltip v-show="false" tooltip_image="catena">
                <li>{{ tooltipData.lifeCycle }}</li>
              </cx-tooltip>
            </div>

            <div class="item-value">
              {{ productData.instanceSpecificData.mileageKm }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Life cycle phase of component</div>
            <div class="info-icon">
              <cx-tooltip v-show="true" tooltip_image="catena">
                <li v-for="item in tooltipData.lifeCycle">{{ item }}</li>
              </cx-tooltip>
            </div>

            <div class="item-value">
              {{ productData.instanceSpecificData.lifeCyclePhaseOfComponent }}
            </div>
          </div>
        </div>
        <div v-else class="loading"><HalfCircleSpinner /></div>
      </template>
    </BaseContainer>
  </div>
</template>

<script>
import { inject } from "vue";
import BaseContainer from "../components/BaseContainer.vue";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";
import CxTooltip from "./CxTooltip.vue";

export default {
  components: { BaseContainer, HalfCircleSpinner, CxTooltip },

  async beforeMount() {
    this.productData = await this.mockService.getEngineDatasByVIN(this.vin);
    this.tooltipData = this.mockService.getTooltipData("engineInformation");
  },
  data() {
    return {
      mockService: inject("mockService"),
      vin: inject("vin"),
      productData: null,
      tooltipData: null,
      engineImage: "engine_images/Golf_V.png",
    };
  },
};
</script>

<style scoped>
.component-main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.loading {
  display: flex;
  justify-content: center;
}
.engine-info-container {
  display: grid;
  font-size: 0.8rem;
}
.engine-info-container hr {
  grid-area: 5/1/5/-1;
  margin: 5px;
  align-self: center;
  color: #ccc;
  height: 0.1px;
}
.section-items {
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
  align-items: center;
  gap: 10px;
}
.section-heading {
  font-weight: 600;
}
.section-heading .product {
  grid-area: 1/1/1/-1;
}
.section-heading .instance {
  grid-area: 6/1/6/-1;
}

.info-icon {
  margin: 5px;
}
.images-container {
  display: grid;
  gap: 10px;
  padding: 5px;

  grid-template-columns: repeat(3, minmax(0px, auto));

  justify-content: center;
}
.images-container img {
  border-radius: 5px;
  max-width: 200px;
}
</style>
