<template>
  <div>
    <h1>Grid Layout</h1>
    <div class="container">
      <div class="item image-container">
        <img
          src="\src\assets\demo-images\WG__Bilder_Golf_V\20231017_131850.jpg"
          alt="Image"
          class="thumbnail"
        />
      </div>
      <div class="sub_heading heading_1">Product Specific Data</div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">Vehicle Brand</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">Volkswagen</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Vehicle Model</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">Golf V</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Production Period</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">10/2003 - 2008</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Fuel Type</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">Diesel</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">KBA Number</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">0603ADK</div>
      </div>
      <div></div>

      <hr class="border-line" />
      <button class="detail-button">View Details</button>
      <div class="sub_heading heading_2">Instance Specific Data</div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Catena X - ID</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">580d3adf-1981-44a0-​a214-13d6ceed9379​</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">VIN</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">WVWZZZ1KZ6W098546</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">First Registration</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">13.12.2005</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Certificate of Decomisioning</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">Issued</div>
      </div>

      <div class="info-sub-grid">
        <div class="key-sub-grid">Mileage</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">153475</div>
      </div>
      <div class="info-sub-grid">
        <div class="key-sub-grid">Damage</div>
        <div class="source-info-sub-grid">
          <img src="\src\assets\catena-logo.jpg" alt="" />
        </div>
        <div class="value-sub-grid">Accident Vehicle</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 15px;
  font-size: 1em;
  border: 1px solid #ccc;
  margin: 10px;
  display: grid;
  width: 90vw;
  height: 200px;
  grid-template-rows: 1fr 2fr 1fr 1fr 2fr;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 3px 3px;
  padding: 5px;
}

.info-sub-grid {
  font-size: 0.6rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: repeat(2, 1fr);
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
  font-weight: bold;
}

.value-sub-grid {
  color: #767d93;
}
.image-container {
  display: flex;
  align-items: center;
  justify-items: center;
  grid-area: 1 / 1 / -1 / 1;
}

.image-container img {
  width: 20vw;
  height: auto;
  min-width: 80px;
  max-width: 120px;

  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.sub_heading {
  font-size: 0.5rem;
}

.heading_1 {
  grid-area: 1/2/1/-1;
}

.heading_2 {
  grid-area: 4/2/4/-1;
}

.border-line {
  align-self: center;
  color: #ccc;
  height: 0.1px;
  width: 100%;
  grid-area: 3/2/3/-2;
}

.detail-button {
  border: 1px solid #ccc;
  background-color: #81bb3933;
  border-radius: 20px;
  grid-area: 3/7/3/7;
  font-size: 1vw;
}
</style>