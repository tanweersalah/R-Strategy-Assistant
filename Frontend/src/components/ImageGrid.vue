<template>
  <div class="image-grid">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="`/demo-images/${image}`"
      alt="Image"
      class="image"
    />
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
.image-grid {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
}

.image {
  overflow: hidden;
  border-radius: 10px; /* Rounded border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ccc;
  width: 90%;
  max-width: 200px;
  height: auto;
}
</style>
