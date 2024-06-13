<template>
  <div class="user-menu">
    <img
      @click="toggleDropdown"
      alt="Profile image"
      class="profile-image"
      src="@/assets/user-image.png"
    />

    <div v-if="isDropdownOpen" class="dropdown-menu">
      <ul>
        <li @click="logout">Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  data() {
    return {
      isDropdownOpen: false,
      auth: inject("authentication"),
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      // Your logout logic here
      this.auth.logout();
      // Example: clear user session and redirect
      // localStorage.removeItem('user');
      // this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.profile-image {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: block;
  border-radius: 50%;
}
.profile-image:hover {
  cursor: pointer;
}
.user-menu {
  position: relative;
  display: inline-block;
}

.user-menu-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 110%;
  right: 30%;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.dropdown-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 5px 5px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #9e9e9e;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
