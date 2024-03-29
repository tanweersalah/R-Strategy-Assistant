<script setup>
import Searchbar from "../components/Searchbar.vue";
</script>

<template>
  <div class="search-box">
    <h2>Search Results</h2>
    <Searchbar class="search-bar" />
  </div>
</template>

<style scoped>
.search-box {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.262);
  height: 40px;
}
.search-box h2 {
  font-size: 15px;
  padding-left: 10px;
}

.search-bar {
  margin-right: 15px;
  width: 30%;
  height: 70%;
}
</style>
