<template>
  <div class="search-container">
    <form v-on:submit.prevent="search">
      <input
        type="text"
        v-model="searchQuery"
        class="search-input"
        placeholder=" "
        required
      />
      <label class="search-placeholder">Enter VIN to Search</label>

      <button class="search-button" @click="search">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      if (this.searchQuery.trim() !== "") {
        // If the field is empty, do not proceed with the search
        this.$router.push({
          path: "/search",
          query: { q: this.searchQuery },
        });
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  display: inline-block;
  position: relative;
  width: 85%;
}
.search-container form {
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 100%;
}

.search-input {
  padding: 5px 0px 5px 15px; /* Adjust padding as needed */
  border: 1px solid #0824807d;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  width: 100%; /* Adjust width as needed */
  min-height: 100%; /* Adjust width as needed */
  transition: box-shadow 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Shadow when focused */
}

/* Search placeholder */
.search-placeholder {
  position: absolute;
  top: 80%;
  left: 5%;
  transform: translateY(-90%);
  color: #999;
  transition: top 0.3s, font-size 0.3s, color 0.3s; /* Transition properties */
  pointer-events: none;
}

.search-input:focus + .search-placeholder,
.search-input:not(:placeholder-shown) + .search-placeholder {
  top: 0;
  font-size: 10px;
  color: #2b2a2a;
}

/* Search button */
.search-button {
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  opacity: 0.8;
}
</style>
