<template>
  <div class="component-main-container container">
    <base-container title="End Of Life">
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

    <base-container title="Additional Services">
      <template #content>
        <div class="content-container-additional">
          <button class="default-btn">Dismantling Instructions</button>
          <button class="default-btn">Create Reuse Certificate</button>
          <button class="default-btn">Update Digital Twin</button>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import CxTooltip from "./CxTooltip.vue";

export default {
  components: { BaseContainer, CxTooltip },
};
</script>

<style scoped>
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
  width: 90vw;
  max-width: 900px;
  display: flex;
  gap: 20px;
}
</style>
