<template>
  <div class="container">
    <dynamic-table class="table" :data="tableData" />
    <image-grid class="images" :imageUrls="imageUrls" />
  </div>
</template>

<script>
import DynamicTable from "./TabularComponent.vue"; // Assuming the file name is DynamicTable.vue
import ImageGrid from "./ImageGrid.vue";
export default {
  components: {
    DynamicTable,
    ImageGrid,
  },
  data() {
    return {
      tableData: {
        Components: ["Engine", "Gearbox", "Battery", "Catalyser"],
        "Car Body": [
          "Doors",
          "Engine Hood",
          "Tailgate",
          "Bumper",
          "Tender",
          "Exterior Mirros",
          "Trailer Coupoling",
        ],
        Interiors: ["Seat", "Dashboard", "Steering Wheel", "Display"],
        Chassis: ["Axle Parts", "Chassis"],
        "Electric & Electronics": [
          "Headlights / Lighting systems",
          "Electric Control Unit",
          "Starter Moter",
          "Alternator / Generator",
          "Air Conditioning Compressor",
          "Tail lights / Rear lights",
          "Assitance Systems",
        ],
      },
      imageUrls: [
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131850.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131900.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131932.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131941.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131947.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131955.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_132007.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_132104.jpg",
        "./src/assets/demo-images/WG__Bilder_Golf_V/20231017_131850.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 20px;
}

.table {
  width: 100%;
  max-width: 900px;
}
.images {
  width: 100%;
}
</style>
