<template>
  <div class="container card-container">
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        active-color="orange"
        done-color="green"
        animated
      >
        <q-step
          :name="1"
          :title="step > 1 ? 'Data Provider Found' : 'Searching Data Provider'"
          active-icon="group"
          icon="search"
          :done="step > 1"
        >
        </q-step>

        <q-step
          :name="2"
          :title="
            step > 2
              ? 'Digital Twin Registry Found'
              : 'Searching Digital Twin Registry'
          "
          active-icon="domain"
          icon="search"
          :done="step > 2"
        >
        </q-step>

        <q-step
          :name="3"
          :title="step > 3 ? 'Digital Twin Found' : 'Searching Digital Twin'"
          active-icon="plagiarism"
          icon="search"
          :done="step > 3"
        >
        </q-step>

        <q-step
          :name="4"
          :title="
            step > 4 ? 'Digital Twin Recieved' : 'Requesting Data Transfer'
          "
          icon="search"
          active-icon="move_down"
          :done="step > 4"
        >
        </q-step>

        <template v-slot:navigation>
          <div class="spinner-data">
            <q-spinner-hourglass color="primary" size="2em" />
          </div>
        </template>
      </q-stepper>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    currentStep: Number,
  },
  beforeMount() {
    this.step = this.currentStep;
  },
  computed: {
    step() {
      return this.currentStep;
    },
  },
  data() {
    return {
      mockService: inject("mockService"),
    };
  },
};
</script>

<style>
.q-stepper__step-content {
  display: none !important;
}
</style>

<style scoped>
.text-red {
  color: rgb(194, 15, 15);
}
.spinner-data {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
}
.status-dropdown {
  width: 80%;

  font-size: 10px;
}
.pcf-button {
  color: #1c58d9;
  width: 70%;
  padding: 0px;
  font-size: 10px;
}
.thumbnail {
  height: 200px;
  width: 20vw;
  max-width: 160px;
  max-height: 200px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.card-container {
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  margin: 5px 0px 15px 0px;
  display: grid;

  height: fit-content;

  grid-template-rows: fit-content(100%) 1.5fr 0.6fr fit-content(100%) 1.5fr;
  grid-template-columns: fit-content(100%) repeat(6, 1fr);
  grid-gap: 1px 1px;
  padding: 5px;
  background-color: #f7f7f7;
}

.info-sub-grid {
  font-size: 0.6rem;
  display: grid;
  grid-gap: 1px 1px;
  grid-template-rows: 10px span;
}
.source-info-sub-grid {
  justify-items: start;
  grid-area: 1/2/1/2;
}
.source-info-sub-grid img {
  margin-top: 1px;
  width: 10vw;
  height: auto;
  min-width: 5px;
  max-width: 12px;
}

.key-sub-grid {
  display: flex;
  gap: 10px;
  margin-right: 20px;
  font-weight: bold;
}

.key-sub-grid-text {
  font-size: 0.7rem;
  font-weight: bold;
  width: fit-content;
}

.value-sub-grid {
  margin-right: 10px;

  font-size: clamp(0.5rem, 1vw, 0.9rem);
  color: #767d93;
}
.image-container {
  display: flex;
  justify-content: center;
  align-self: center;
  grid-area: 1 / 1 / -1 / 1;
  margin: 5px;
}

.image-container img {
  width: auto;
  height: auto;
  min-width: 80px;
  max-width: 120px;
  max-height: 200px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.sub_heading {
  font-size: 0.6rem;
  gap: 5px;
  display: flex;
  margin-bottom: 5px;
}

.heading_1 {
  grid-area: 1/2/1/-1;
}

.heading_2 {
  grid-area: 4/2/5/-1;
  position: relative;
  bottom: 8px;
}

.border-line {
  align-self: center;
  color: #ccc;
  height: 0.1px;
  width: 100%;
  grid-area: 3/2/3/-2;
}

.detail-button {
  grid-area: 3/7/3/7;
  height: fit-content;
}

.detail-button button {
  width: 80%;
  height: fit-content;
  border: 1px solid #ccc;
  background-color: #8db759bb;
  box-shadow: 2px 4px 5px rgb(115, 110, 110);
  border-radius: 20px;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  font-size: clamp(0.5rem, 1vw, 0.7rem);
}
.detail-button button:hover {
  box-shadow: 2px 2px 5px rgb(115, 110, 110);
}
</style>
