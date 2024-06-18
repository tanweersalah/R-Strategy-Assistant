<template>
  <div class="main-container">
    <div class="container documentation-container">
      <h2>Documentations :</h2>
      <div class="documentation-links">
        <button @click="openLinkInNewTab('circularityKit')" class="default-btn">
          Circularity Kit
        </button>
        <button @click="openLinkInNewTab('circularityKit')" class="default-btn">
          CE - Assistant
        </button>
        <button @click="openLinkInNewTab('ecoPassKit')" class="default-btn">
          Eco Pass KIT
        </button>
        <button @click="openLinkInNewTab('industryCore')" class="default-btn">
          Industry Core
        </button>
        <button @click="openLinkInNewTab('digitalTwin')" class="default-btn">
          Digital Twin
        </button>
        <button @click="openLinkInNewTab('arc42')" class="default-btn">
          ARC 42 Documentation
        </button>
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
            <button @click="openLinkInNewTab('pub1')" class="default-btn">
              Publication 1
            </button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Empowering End-of-Life Vehicle Decision Making with Cross-Company
              Data Exchange and Data Sovereignty via Catena-X
            </p>
            <button @click="openLinkInNewTab('pub2')" class="default-btn">
              Publication 2
            </button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Digital Twins for Circular Economy - Enabling Decision Support for
              R-Strategies
            </p>
            <button @click="openLinkInNewTab('pub3')" class="default-btn">
              Publication 3
            </button>
          </div>
        </li>
        <li>
          <div class="publication-item">
            <p>
              Digital Twins within the Circular Economy: Literature Review and
              Concept Presentation
            </p>
            <button @click="openLinkInNewTab('pub4')" class="default-btn">
              Publication 4
            </button>
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
      <button @click="openLinkInNewTab('dataModels')" class="default-btn">
        Semantic Models
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        circularityKit:
          "https://eclipse-tractusx.github.io/docs-kits/kits/Circularity_KIT/page-adoption-view/",
        ceAssistant:
          "https://eclipse-tractusx.github.io/docs-kits/kits/Circularity_KIT/page-adoption-view/#ce-assistant",
        ecoPassKit:
          "https://eclipse-tractusx.github.io/docs-kits/kits/Eco_Pass_KIT/page-adoption-view",
        industryCore:
          "https://eclipse-tractusx.github.io/docs-kits/kits/Industry%20Core%20Kit/Business%20View%20Industry%20Core%20Kit/",
        digitalTwin:
          "https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Adoption%20View%20Digital%20Twin%20Kit/",
        arc42:
          "https://github.com/eclipse-tractusx/digital-product-pass/blob/main/docs/arc42/Arc42.md",
        pub1: "https://www.sciencedirect.com/science/article/pii/S2212827123006091",
        pub2: "https://www.mdpi.com/2071-1050/16/7/2748",
        pub3: "https://industry-science.com/artikel/digitale-zwillinge-fuer-die-kreislaufwirtschaft-entscheidungsunterstuetzung-fuer-r-strategien/",
        pub4: "https://www.sciencedirect.com/science/article/pii/S2212827123006091",
        dataModels: "https://github.com/eclipse-tractusx/sldt-semantic-models",
      },
    };
  },
  methods: {
    openLinkInNewTab(key) {
      const url = this.links[key];
      if (url) {
        window.open(url, "_blank");
      } else {
        console.error("URL not found for the given key:", key);
      }
    },
  },
};
</script>

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

.documentation-container {
  margin-top: 20px;
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
