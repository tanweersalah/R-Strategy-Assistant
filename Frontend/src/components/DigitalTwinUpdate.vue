<template>
  <div class="component-main-container container">
    <base-container title="End Of Life">
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

    <base-container title="Additional Services">
      <template #content>
        <div class="content-container-additional">
          <button class="default-btn" @click="downloadFile">
            Dismantling Instructions
          </button>
          <button
            class="default-btn"
            @click="
              changeStatusMessage('Reuse certificate created successfully')
            "
          >
            Create Reuse Certificate
          </button>
          <button
            class="default-btn"
            @click="changeStatusMessage('Digital twin updated successfully')"
          >
            Update Digital Twin
          </button>
        </div>
        <div class="additional-message">
          <div v-if="sendingInfo" class="loading-container">
            <half-circle-spinner></half-circle-spinner>
          </div>
          <div v-if="statusMessage">{{ statusMessage }}</div>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import CxTooltip from "./CxTooltip.vue";
import DismantlingInstruction from "@/assets/dismantling-instruction.txt";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";

export default {
  components: { BaseContainer, CxTooltip, HalfCircleSpinner },
  data() {
    return {
      statusMessage: null,
      sendingInfo: false,
    };
  },
  methods: {
    changeStatusMessage(message) {
      this.sendingInfo = true;
      setTimeout(() => {
        this.sendingInfo = false;
        this.statusMessage = message;

        setTimeout(() => {
          this.statusMessage = null;
        }, 2000);
      }, 1000);
    },

    downloadFile() {
      this.statusMessage = "Dismantling instructions downloaded successfully";

      setTimeout(() => {
        this.statusMessage = null;
      }, 2000);

      const filePath = DismantlingInstruction;

      const link = document.createElement("a");

      link.href = filePath;

      link.download = "dismantling-instruction.txt";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.additional-message {
  padding-top: 15px;
  display: flex;
  justify-content: center;
  color: green;
  font-size: 0.7rem;
}
.tool-tip-image {
  width: 40vw;
}
.end-of-life-decision {
  display: flex;
  gap: 20px;
}

.component-main-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.content-container-additional {
  padding-top: 10px;
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
