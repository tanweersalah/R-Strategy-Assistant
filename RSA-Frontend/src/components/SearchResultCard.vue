<template>
  <div class="search-result-card">
    <div class="image-container">
      <img :src="imageUrl" alt="Image" class="thumbnail" />
    </div>
    <div class="details-container">
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Make:</div>
          <div class="detail-value">Toyota</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Model:</div>
          <div class="detail-value">Camry</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Year:</div>
          <div class="detail-value">2022</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Color:</div>
          <div class="detail-value">Silver</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Mileage:</div>
          <div class="detail-value">10,000 miles</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Fuel Type:</div>
          <div class="detail-value">Gasoline</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-column">
          <div class="detail-label">Engine Size:</div>
          <div class="detail-value">2.5L</div>
        </div>
        <div class="detail-column">
          <div class="detail-label">Transmission:</div>
          <div class="detail-value">Automatic</div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button class="action-button">Action</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
  },
};
</script>

<style scoped>
.search-result-card {
  display: flex;
  width: 100%;
  max-height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.image-container {
  padding: 10px;
  width: 25%;
}
.details-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.detail-row {
  display: flex;
}

.detail-column {
  flex: 1;
  margin-right: 20px;
}

.detail-label {
  color: #ff0000; /* Blue color for labels */
  font-size: 10px;
  font: bolder;
}

.detail-value {
  color: #221f52; /* Green color for values */
}

.button-container {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
