<template>
  <div class="component-main-container container">
    <base-container
      class="r-strategy base-container"
      title="Basic R-Strategies Information"
    >
      <template #info>
        <cx-tooltip imgSrc="info">
          <p>
            Based on Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF
            THE COUNCIL on circularity requirements for vehicle design and on
            management of end-of-life vehicles, amending Regulations (EU)
            2018/858 and 2019/1020 and repealing Directives 2000/53/EC and
            2005/64/EC Learn More :
            <i
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52023PC0451"
              target="blank"
              >Click Here</i
            >
          </p>
        </cx-tooltip>
      </template>
      <template #content>
        <div class="content-grid">
          <div class="content-item">
            <div class="item-key">Reuse Potential</div>
            <div class="item-value">
              Component is not part of the exclusion list and can generally be
              reused
            </div>
          </div>

          <div class="content-item">
            <div class="item-key">Material Composition</div>
            <div class="item-value">No toxic materials or mercury</div>
          </div>

          <div class="content-item">
            <div class="item-key">Remaining Lifetime (km)</div>
            <div class="item-value">200,000</div>
          </div>

          <div class="content-item">
            <div class="item-key">Disassembly Capacity</div>
            <div class="item-value">
              Component can be dismantled non-destructively
            </div>
          </div>
        </div>
      </template>
    </base-container>
    <base-container
      class="quality-container base-container"
      title="Quality for possible R-Strategy"
    >
      <template #info>
        <cx-tooltip imgSrc="info"
          ><p>
            Bases on VDI 4080 Learn More :
            <i
              href="https://www.dinmedia.de/de/technische-regel/vdi-4080/118177766"
              target="blank"
              >Click Here</i
            >
          </p>
        </cx-tooltip>
      </template>
      <template #content>
        <div class="content-grid">
          <form @submit.prevent="determineQuality">
            <div class="content-item">
              <div class="item-key">Mileage (km)</div>
              <div class="item-value">
                <input
                  class="default-input"
                  type="text"
                  value="123123"
                  disabled
                />
              </div>
            </div>
            <hr />
            <div class="content-item">
              <div>
                <label class="default-label" for="functional-quality">
                  Functional Check
                </label>
                <select class="default-input" id="functional-quality" required>
                  <option value="" selected disabled class="placeholder">
                    Select an option
                  </option>
                  <option value="no recognisable defects">
                    No Recognisable Defects
                  </option>
                  <option value="Functional">Functional</option>
                  <option value="Not Functional">Not Functional</option>
                </select>
              </div>
              <div>
                <label class="default-label" for="sound-quality">Sound</label>
                <select class="default-input" id="sound-quality" required>
                  <option value="" selected disabled class="placeholder">
                    Select an option
                  </option>
                  <option value="No Unsual Sound">No Unusual Sounds</option>
                  <option value="Unusual Sound">Unusual Sounds</option>
                </select>
              </div>
            </div>
            <div class="content-item">
              <div>
                <label class="default-label" for="visual-quality">Visual</label>
                <select
                  class="default-input"
                  name="cars"
                  id="visual-quality"
                  required
                >
                  <option value="" selected disabled class="placeholder">
                    Select an option
                  </option>
                  <option value="Good Compression">Good Compression</option>
                  <option value="Bad Compression">Bad Compression</option>
                </select>
              </div>
              <div>
                <label class="default-label" for="gasket-quality">
                  Gasket Quality
                </label>
                <select
                  class="default-input"
                  name="cars"
                  id="gasket-quality"
                  required
                >
                  <option value="" selected disabled class="placeholder">
                    Select an option
                  </option>
                  <option value="no leaks">No Leaks</option>
                  <option value="Leaks">Leaks</option>
                </select>
              </div>
            </div>
            <transition-group
              tag="div"
              name="quality-button"
              class="determine-quality-button"
            >
              <button class="default-btn" type="submit">
                Determine Quality
              </button>
              <button
                class="default-btn"
                v-show="componentQuality"
                type="button"
                @click="determineQuality"
              >
                Update digital twin
              </button>
            </transition-group>
            <div v-if="qualityInProgress" class="button-container">
              <half-circle-spinner></half-circle-spinner>
            </div>
            <div
              v-else
              class="content-item determine-quality"
              v-show="componentQuality"
            >
              <div class="item-key">Quality of Component</div>
              <div class="item-value quality-text">{{ componentQuality }}</div>
            </div>
          </form>
        </div>
      </template>
    </base-container>
    <base-container
      class="technical-feasibility-container base-container"
      title="Technical feasibility of R-Strategy"
    >
      <template #info>
        <cx-tooltip imgSrc="info">
          <img
            class="tool-tip-image"
            src="@/assets/technical-feasibility-info.png"
            alt=""
          />
        </cx-tooltip>
      </template>
      <template #content>
        <div class="technical-feasibility">
          <div v-if="qualityInProgress" class="button-container">
            <half-circle-spinner></half-circle-spinner>
          </div>
          <div class="button-container" v-else>
            <button class="disabled-div" :class="backgroundColor">Reuse</button>
            <button class="disabled-div" :class="backgroundColor">
              Remanufacture
            </button>
            <button class="disabled-div" :class="backgroundColor">
              Recycle
            </button>
            <button class="disabled-div" :class="backgroundColor">
              Recover
            </button>
          </div>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import CxTooltip from "./CxTooltip.vue";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";

export default {
  components: { BaseContainer, CxTooltip, HalfCircleSpinner },
  data() {
    return {
      componentQuality: null,
      backgroundColor: null,
      qualityInProgress: false,
    };
  },
  methods: {
    determineQuality() {
      this.qualityInProgress = true;
      setTimeout(() => {
        this.componentQuality = "B";
        this.backgroundColor = "bg-color-green";
        this.qualityInProgress = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.disabled-div {
  width: 100px;
  min-width: fit-content;
}

.quality-text {
  margin-left: 20px;
  color: green;
  font-weight: 600;
  font-size: 1.2rem;
}
.determine-quality-button {
  display: flex;
  justify-content: center;
}
.determine-quality {
  justify-items: center;
}
.default-btn {
  margin: 10px;
  justify-self: center;
  width: 40%;
}

.bg-color-green {
  background-color: rgb(89, 133, 23);
  color: rgb(255, 255, 255);
}
.tool-tip-image {
  width: 40vw;
}

.item-key,
.item-value {
  align-self: center;
}
.button-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.base-container {
  min-width: 40%;
  max-width: 70%;
}

.r-strategy {
  flex: 1;
}
.quality-container {
  flex: 1;
}
.technical-feasibility-container {
  flex: 1;
}

.component-main-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.content-grid {
  display: grid;
  gap: 10px;
}
.content-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
.quality-container .content-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.item-key {
  font-weight: 500;
}
</style>
