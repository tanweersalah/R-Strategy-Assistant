<template>
  <div class="component-main-container container">
    <base-container title="End Of Life">
      <div class="end-of-life-decision">
        <div>
          <label class="default-label" for="functional-quality"
            >Functional Check</label
          >
          <select class="default-input" id="functional-quality">
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
          <label class="default-label" for="functional-quality"
            >Functional Check</label
          >
          <select class="default-input" id="functional-quality">
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
      </div>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: { BaseContainer },
};
</script>
