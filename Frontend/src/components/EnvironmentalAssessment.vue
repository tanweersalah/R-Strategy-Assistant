<template>
  <div class="component-container container">
    <base-container class="caused-emission-container" title="Caused Emissions">
    <template #info>
        <cx-tooltip imgSrc="info">
          <img
            class="tool-tip-image"
            src="@/assets/environment_eol.png"
            alt=""
          />
        </cx-tooltip>
      </template>
      <template #content>
        <h7 class="grid-description">
          Life cycle impact assessment based on ISO 14040 and ISO 14044.
          The calculation consits of real life data and Ecoinvent data.​ ​
        </h7>
        <div class="bargraph-main-container-grid">
          <div class="new-production top-grid-item-one-column">
            <div class="grid-item-title"></div>
            <div class="grid-item-section-name">
              <button class="default-btn">New Production</button>
            </div>
            <div class="grid-item-bargraph">
              <cx-tooltip imgSrc="info" class="tooltip-top-right"
                ><p>
                  Based on Ecoinvent 3.9 data bases, method for impact
                  assessment ReCiPe2016​
                </p>
              </cx-tooltip>
              <p>1026 kg CO²</p>
            </div>
          </div>
          <div class="component-level top-grid-item-two-column">
            <div class="top-grid-item grid-item-reuse">
              <div class="grid-item-title"><p>Component Level</p></div>
              <div class="grid-item-section-name">
                <button class="default-btn">Reuse</button>
              </div>
              <div class="grid-item-bargraph">
                <cx-tooltip imgSrc="info" class="tooltip-top-right"
                  ><p>
                    Results from the project Digma-DT, mass allocation based on
                    ISO 14040 and 14044.​
                  </p>
                </cx-tooltip>
                <p>7.284 kg CO²</p>
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

        <div class="recommended-strategy">
          <div>Recommended R-Strategy :</div>
          <div class="default-input rstrategy-input">Reuse</div>
        </div>
      </template>
    </base-container>

    <base-container title="End Of Life Decision">
      

      <template #content>
        <div class="end-of-life-decision">
          <div>
            <label class="default-label" for="component-selector"
              >Select Component</label
            >
            <select class="default-input" id="component-selector" v-model="selectedComponent" @change="handleChangeComponent">
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
            <select class="default-input" id="functional-quality"  v-model="selectedEOD" @change="handleChangeDecision">
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
  beforeMount(){
    const storedComponent = sessionStorage.getItem('endOfLifeComponent');
    if (storedComponent) {
      this.selectedComponent = storedComponent;
    }
    else {
      this.selectedComponent = '';
    }
    const storedDecision = sessionStorage.getItem('endOfLifeDecision');
    if (storedDecision) {
      this.selectedEOD = storedDecision;
    }
    else {
      this.selectedEOD = '';
    }
  },
  methods:{
    handleChangeComponent(event) {
      const selectedComponent = event.target.value;
      sessionStorage.setItem('endOfLifeComponent', selectedComponent);
    },
    handleChangeDecision(event) {
      const selectedEOD = event.target.value;
      sessionStorage.setItem('endOfLifeDecision', selectedEOD);
    }
  },
  data() {
    return {
      co2emission: 300,
      vin: inject("vin"),
    };
  },
};
</script>

<style scoped>
.recommended-strategy {
  justify-self: center;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tooltip-top-right {
  grid-area: 1/1/2/2;
  justify-self: end;
  align-self: start;
  padding: 3px 8px 0 0;
  color: #000000 !important;
}
.tooltip-top-right p {
  color: #000000 !important;
}
.grid-item-reuse .grid-item-bargraph {
}
.grid-item-reuse .grid-item-bargraph p,
.new-production .grid-item-bargraph p {
  grid-area: 1/1/2/2;
  justify-self: center;
  color: #fff;
}
.default-btn {
  width: 100%;
}
.rstrategy-input {
  width: 200px;
  background-color: #fff;
  color: #57a957;
  font-weight: 600;
  padding-top: 5px;
  padding-left: 20px;
}
.tool-tip-image {
  width: 40vw;
}
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

.new-production .grid-item-bargraph {
  margin-top: 10px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  background-image: url("/bargraph.svg");
  background-size: cover;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.grid-item-reuse .grid-item-bargraph {
  margin-top: 10px;
  background-color: #ffa601;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
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
