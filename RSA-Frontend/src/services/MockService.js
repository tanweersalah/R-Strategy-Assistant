// src/services/MockService.js
import search from "../data/searchResult.json";
import valueParts from "../data/valueParts.json";
import engineData from "../data/engineData.json";

class MockService {
  // Method to get all search results
  getSearchResults() {
    return search.searchResults;
  }

  // Method to find a result by VIN
  getResultByVIN(vin) {
    return search.searchResults.find(
      (result) => result.detailsData.vin === vin
    );
  }
  // Method to find a value parts by VIN
  getValuePartsByVIN(vin) {
    return valueParts[vin];
  }
  getEngineDatasByVIN(vin) {
    return engineData[vin];
  }
}

export default new MockService();
