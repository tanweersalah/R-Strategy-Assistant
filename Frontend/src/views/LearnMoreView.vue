<template>
  <div class="main-container">
    <div class="container back-container" @click="redirectToSearch">
      <p>⬅ Back to Search</p>
    </div>

    <div class="container documentation-container">
      <h2>Documentations :</h2>
      <div class="documentation-links">
        <button class="default-btn">Circularity Kit</button>
        <button class="default-btn">CE - Assistant</button>
        <button class="default-btn">Eco Pass KIT</button>
        <button class="default-btn">Industry Core</button>
        <button class="default-btn">Digital Twin</button>
        <button class="default-btn">ARC 42 Documentation</button>
      </div>
    </div>

    <div class="container publication-container">
      <h2>Publications :</h2>
      <p>
        If you are eager to dive deeper into the world of the CE-Strategy
        Assistant, including its data provision via the Digital Twin and expert
        insights on technically feasible circular strategies and environmentally
        friendly choices, we invite you to explore our informative publications.
      </p>
      <ol class="publication-links">
        <li>
          <div class="publication-item">
            <p>
              End-of-life decision support to enable circular economy in the
              automotive industry based on digital twin data
            </p>
            <button class="default-btn">Publication 1</button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Empowering End-of-Life Vehicle Decision Making with Cross-Company
              Data Exchange and Data Sovereignty via Catena-X
            </p>
            <button class="default-btn">Publication 1</button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Digital Twins for Circular Economy - Enabling Decision Support for
              R-Strategies
            </p>
            <button class="default-btn">Publication 1</button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Digital Twins within the Circular Economy: Literature Review and
              Concept Presentation
            </p>
            <button class="default-btn">Publication 1</button>
          </div>
        </li>
      </ol>
    </div>

    <div class="container architecture-container">
      <h2>Architecture of the CE - Assistant :</h2>
      <div class="architecure-image">
        <img src="@/assets/ce-architecture-s.png" alt="" />
      </div>
    </div>

    <div class="container data-model-container">
      <h2>Data Models :</h2>
      <button class="default-btn">Semantic Models</button>
    </div>
  </div>
</template>

<style scoped>
li {
  margin: 20px;
}

.architecure-image img {
  max-width: 90%;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.architecure-image {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.publication-item button {
  min-width: 100px;
  margin-left: 10px;
  margin-right: 10px;
}
.publication-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.back-container {
  margin: 10px 20px 10px 20px;
  display: flex;
  justify-content: start;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.back-container p {
  margin: 5px;
  margin-left: 10px;
  font-size: 12px;
}

.documentation-container,
.publication-container,
.architecture-container,
.data-model-container {
  padding-left: 20px;
  padding-right: 20px;
}

.data-model-container {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
h2 {
  font-weight: 600;
}

.documentation-links {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.documentation-links button {
  margin-left: 10px;
  margin-right: 10px;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
