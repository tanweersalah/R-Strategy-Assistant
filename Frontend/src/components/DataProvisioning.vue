<template>
  <div class="component-main-container container">
    <BaseContainer class="base-container" title="Images">
      <template #content>
        <div class="images-container">
          <img
            src="/src/assets/demo-images/engine_images/Golf_V.png"
            alt="engine image"
          />
        </div>
      </template>
    </BaseContainer>
    <BaseContainer class="base-container" title="Engine Information">
      <template #content>
        <div class="engine-info-container">
          <div class="section-heading product">Product Specific Data</div>

          <div class="section-items">
            <div class="item-key">Product Name</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.productSpecificData.productName }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">OE Number</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.productSpecificData.oeNumber }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Weight (kg)</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.productSpecificData.weightKg }}
            </div>
          </div>
          <hr />

          <div class="section-heading instance">Instance Specific Data</div>

          <div class="section-items">
            <div class="item-key">Catena-X ID</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.instanceSpecificData.catenaXId }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Serial Number</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.instanceSpecificData.serialNumber }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Year of Manufacturing</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.instanceSpecificData.yearOfManufacturing }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Mileage (km)</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.instanceSpecificData.mileageKm }}
            </div>
          </div>

          <div class="section-items">
            <div class="item-key">Life cycle phase of component</div>

            <img
              class="info-icon"
              src="\src\assets\catena-logo.jpg"
              alt="catena x info button"
            />

            <div class="item-value">
              {{ productData.instanceSpecificData.lifeCyclePhaseOfComponent }}
            </div>
          </div>
        </div>
      </template>
    </BaseContainer>
  </div>
</template>

<script>
import { inject } from "vue";
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: { BaseContainer },
  props: ["vin"],
  beforeMount() {
    this.productData = this.mockService.getEngineDatasByVIN(this.vin);
  },
  data() {
    return {
      mockService: inject("mockService"),
      productData: null,
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
  max-width: 15px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
