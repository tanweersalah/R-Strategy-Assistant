<template>
  <div class="base-main-container">
    <div class="container-title">
      <h3>{{ title }}</h3>
    </div>
    <div class="container-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.base-main-container {
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-rows: 20px auto;
  width: max-content;
  height: 100%;
  min-height: 50px;
}

.container-title {
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 30px;
}

.container-title h3 {
  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px 5px 15px;
  margin-bottom: 30px;
}

.container-content {
  margin: 18px 15px 10px 18px;
}
</style>
