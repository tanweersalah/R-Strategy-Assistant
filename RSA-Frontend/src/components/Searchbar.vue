<template>
  <div class="search-container">
    <input type="text" class="search-input" placeholder=" " />
    <label class="search-placeholder">Enter VIN to Search</label>

    <button class="search-button" @click="redirectToSearch">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToSearch() {
      this.$router.push("/search");
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

.search-input {
  padding: 5px 0px 5px 15px; /* Adjust padding as needed */
  border: 1px solid #0824807d;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
  width: 100%; /* Adjust width as needed */
  height: 100%; /* Adjust width as needed */
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
