<template>
  <div class="component-main-container container">
    <base-container title="End Of Life">
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

    <div></div>
  </div>
</template>

<script>
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: { BaseContainer },
};
</script>

<style scoped>
.end-of-life-decision {
  display: flex;
  gap: 20px;
}

.component-main-container {
  display: flex;
  justify-content: center;
}
</style>
