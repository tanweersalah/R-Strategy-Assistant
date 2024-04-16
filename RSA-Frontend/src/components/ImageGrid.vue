<template>
  <div class="container">
    <div class="container-heading">
      <h3>Available Images</h3>
    </div>
    <div class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img :src="image" alt="Image" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrls: {
      type: Array,
      required: true,
    },
  },
  computed: {
    images() {
      return this.imageUrls.filter((url) => !!url); // Remove any empty or falsy URLs
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
}

.container-heading {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.container-heading h3 {
  font-weight: bold;
  font-size: 12px;
  padding: 5px 2px 5px 15px;
}
.image-grid {
  padding: 10px;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.image-item {
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  overflow: hidden;
  border-radius: 10px; /* Rounded border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image {
  width: 80%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
