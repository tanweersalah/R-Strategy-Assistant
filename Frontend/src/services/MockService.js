// src/services/MockService.js
import search from "../data/searchResult.json";
import valueParts from "../data/valueParts.json";
import engineData from "../data/engineData.json";

class MockService {
  // Method to get all search results
  constructor(time_delay) {
    this.time_delay = time_delay;
  }
  getSearchResults() {
    return search.searchResults;
  }

  // Method to find a result by VIN
  async getResultByVIN(vin) {
    await new Promise((resolve) => setTimeout(resolve, this.time_delay));
    return search.searchResults.find(
      (result) => result.detailsData.vin === vin
    );
  }
  // Method to find a value parts by VIN
  async getValuePartsByVIN(vin) {
    await new Promise((resolve) => setTimeout(resolve, this.time_delay));
    return valueParts[vin];
  }
  async getEngineDatasByVIN(vin) {
    await new Promise((resolve) => setTimeout(resolve, this.time_delay));
    return engineData[vin];
  }
}

export default new MockService(3000);
