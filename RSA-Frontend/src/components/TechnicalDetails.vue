<template>
  <div class="component-main-container container">
    <base-container
      class="r-strategy base-container"
      title="Basic R-Strategies Information"
    >
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
    </base-container>
    <base-container
      class="quality-container base-container"
      title="Quality for possible R-Strategy"
    >
      <div class="content-grid">
        <div class="content-item">
          <div class="item-key">Mileage (km)</div>
          <div class="item-value">
            <input class="default-input" type="text" value="123123" disabled />
          </div>
        </div>
        <hr />
        <div class="content-item">
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
            <label class="default-label" for="sound-quality">Sound</label>
            <select class="default-input" id="sound-quality">
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
            <select class="default-input" name="cars" id="visual-quality">
              <option value="" selected disabled class="placeholder">
                Select an option
              </option>
              <option value="Good Compression">Good Compression</option>
              <option value="Good Compression">Bad Compression</option>
            </select>
          </div>
          <div>
            <label class="default-label" for="gasket-quality"
              >Gasket Quality</label
            >
            <select class="default-input" name="cars" id="gasket-quality">
              <option value="" selected disabled class="placeholder">
                Select an option
              </option>
              <option value="no leaks">No Leaks</option>
              <option value="Leaks">Leaks</option>
            </select>
          </div>
        </div>

        <button class="default-btn">Determine Quality</button>

        <div class="content-item">
          <div class="item-key">Quality of Component</div>
          <div class="item-value">-</div>
        </div>
      </div>
    </base-container>
    <base-container
      class="technical-feasibility-container base-container"
      title="Technical feasibility of R-Strategy"
    >
      <div class="button-container">
        <button class="default-btn" disabled>Reuse</button>
        <button class="default-btn" disabled>Remanufacture</button>
        <button class="default-btn" disabled>Recycle</button>
        <button class="default-btn" disabled>Recover</button>
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

<style scoped>
.button-container {
  padding: 10px;
  display: flex;
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
