<template>
  <div class="component-main-container">
    <base-container class="container" title="High Value Parts">
      <template #content>
        <div v-if="mockData">
          <dynamic-table slot="content" class="table" :data="mockData" @dataProvissiong="openDataProvisioning" />
        </div>
        <div v-else class="loading">
          <HalfCircleSpinner />
        </div>
      </template>
    </base-container>
    <base-container class="images-container container" title="Available Images">
      <template #content>
        <div v-if="mockData">
          <image-grid class="images" :imageUrls="imageUrls" />
        </div>

        <div v-else class="loading">
          <HalfCircleSpinner /></div
      ></template>
    </base-container>
  </div>
</template>

<script>
import DynamicTable from "./TabularComponent.vue";
import BaseContainer from "./BaseContainer.vue";
import ImageGrid from "./ImageGrid.vue";
import { inject } from "vue";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";

export default {
  components: {
    DynamicTable,
    ImageGrid,
    BaseContainer,
    HalfCircleSpinner,
  },
  methods:{
    openDataProvisioning(){
      this.$emit("dataProvissiong");
    }
  },
  data() {
    return {
      mockService: inject("mockService"),
      mockData: null,
      vin: inject("vin"),
      imageUrls: [
        "WG__Bilder_Golf_V/20231017_131850.jpg",
        "WG__Bilder_Golf_V/20231017_131900.jpg",
        "WG__Bilder_Golf_V/20231017_131932.jpg",
        "WG__Bilder_Golf_V/20231017_131941.jpg",
        "WG__Bilder_Golf_V/20231017_131947.jpg",
        "WG__Bilder_Golf_V/20231017_131955.jpg",
        "WG__Bilder_Golf_V/20231017_132007.jpg",
        "WG__Bilder_Golf_V/20231017_132104.jpg",
        "WG__Bilder_Golf_V/20231017_131850.jpg",
      ],
    };
  },
  async created() {
    this.mockData = await this.mockService.getValuePartsByVIN(this.vin);
    console.log(this.vin);
    console.log(this.mockData);
  },
};
</script>

<style scoped>
.component-main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 20px;
}
.loading {
  display: flex;
  justify-content: center;
}
.table {
  width: 100%;
}
.images-container {
  width: 90vw;
  max-width: 900px;
}
</style>
