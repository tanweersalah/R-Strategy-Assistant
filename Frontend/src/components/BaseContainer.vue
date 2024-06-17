<template>
  <div class="base-main-container">
    <div class="container-title">
      <h3>{{ title }}</h3>
      <slot name="info"></slot>
    </div>
    <div class="container-content">
      <slot name="content">Content</slot>
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
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
}

.container-title h3 {
  font-weight: bold;
  font-size: 12px;

  margin-bottom: 30px;
}

.container-content {
  width: 100%;
  padding: 18px 15px 10px 18px;
  justify-self: center;
  align-self: center;
}
</style>
