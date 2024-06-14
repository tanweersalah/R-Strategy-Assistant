<template>
  <div class="component-container container">
    <base-container class="caused-emission-container" title="Caused Emissions">
      <template #info>
        <cx-tooltip imgSrc="/src/assets/info.png"></cx-tooltip>
      </template>
      <template #content>
        <h3 class="grid-description">
          Life cycle impact assessment based on ISO 14040 and ISO 14044.
          The calculation consits of real life data and Ecoinvent data.​ ​
        </h3>
        <div class="bargraph-main-container-grid">
          <div class="new-production top-grid-item-one-column">
            <div class="grid-item-title"></div>
            <div class="grid-item-section-name">
              <button class="default-btn">New Production</button>
            </div>
            <div class="grid-item-bargraph"><p>1026 kg CO2</p></div>
          </div>
          <div class="component-level top-grid-item-two-column">
            <div class="top-grid-item grid-item-reuse">
              <div class="grid-item-title"><p>Component Level</p></div>
              <div class="grid-item-section-name">
                <button class="default-btn">Reuse</button>
              </div>
              <div class="grid-item-bargraph">
                <p>7.284 kg CO2</p>
              </div>
            </div>
            <div class="top-grid-item grid-item-remanufacture">
              <div class="grid-item-title"></div>
              <div class="grid-item-section-name">
                <button class="default-btn">Remanufacture</button>
              </div>
              <div class="grid-item-bargraph"></div>
            </div>
          </div>
          <div class="material-level top-grid-item-two-column">
            <div class="top-grid-item grid-item-recycle">
              <div class="grid-item-title">Material Level</div>
              <div class="grid-item-section-name">
                <button class="default-btn">Recycle</button>
              </div>
              <div class="grid-item-bargraph"></div>
            </div>
            <div class="top-grid-item grid-item-recover">
              <div class="grid-item-title"></div>
              <div class="grid-item-section-name">
                <button class="default-btn">Recover</button>
              </div>
              <div class="grid-item-bargraph"></div>
            </div>
          </div>
        </div>
      </template>
    </base-container>

    <base-container title="End Of Life Decision">
      <template #info>
        <cx-tooltip imgSrc="/src/assets/info.png"> </cx-tooltip>
      </template>

      <template #content>
        <div class="end-of-life-decision">
          <div>
            <label class="default-label" for="component-selector"
              >Select Component</label
            >
            <select class="default-input" id="component-selector">
              <option value="" selected disabled class="placeholder">
                Select an option
              </option>
              <option value="engine">Engine</option>
            </select>
          </div>
          <div>
            <label class="default-label" for="functional-quality"
              >Select End of Life Decision</label
            >
            <select class="default-input" id="functional-quality">
              <option value="" selected disabled class="placeholder">
                Select an option
              </option>
              <option value="reuse">Reuse</option>
              <option value="remanufacture">Remanufacture</option>
              <option value="recycle">Recycle</option>
              <option value="repair">Repair</option>
            </select>
          </div>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import CxTooltip from "./CxTooltip.vue";
import BaseContainer from "./BaseContainer.vue";
import { inject } from "vue";

export default {
  components: { CxTooltip, BaseContainer },
  data() {
    return { co2emission: 300, vin: inject("vin") };
  },
};
</script>

<style scoped>
.end-of-life-decision {
  display: flex;
  gap: 20px;
}
.bargraph-main-container-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.top-grid-item-one-column {
  border: 1px solid #000000;
  padding: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  padding-bottom: 15px;
}
.top-grid-item-two-column {
  border: 1px solid #000000;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding-bottom: 15px;
}

.top-grid-item {
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
}
.grid-description {
  padding: 6px;
}
.caused-emission-container {
  width: 90vw;
  max-width: 1200px;
}

.component-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.bargraph-main-container-grid button {
  background-color: #b3cb2e;
  border: none;
  color: #fff;
}

.grid-item-bargraph {
  margin-top: 10px;
  background-color: #777d93;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
}
.grid-item-reuse .grid-item-bargraph {
  margin-top: 10px;
  background-color: #ffa601;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20%;
}
.grid-item-remanufacture .grid-item-bargraph {
  margin-top: 10px;
  background-color: #ffa601;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 35%;
}
.grid-item-recycle .grid-item-bargraph {
  margin-top: 10px;
  background-color: #ffa601;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50%;
}
.grid-item-recover .grid-item-bargraph {
  margin-top: 10px;
  background-color: #ffa601;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 65%;
}
</style>
