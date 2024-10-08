<template>
  <div class="search-container">
    <!-- <form v-on:submit.prevent="search">
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
    </form> -->

    <q-form @submit="search" @reset="onReset" class="search-input">
      <q-input
        outlined
        rounded
        v-model="searchQuery"
        label="Enter VIN to Search"
        dense
      >
        <template v-slot:append>
          <q-icon
            name="search"
            @click="search"
            type="submit"
            class="cursor-pointer"
          />
        </template>
      </q-input>
    </q-form>
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
  width: 80%;
}
.search-input {
  width: 100%;
}
</style>
