<template>
  <header>
    <div class="container header-container">
      <router-link to="/" class="logo-link">
        <div class="app-logo">
          <img alt="R Strategy logo" src="@/assets/Catena-X_Logo.png" />
        </div>
      </router-link>

      <div class="message"></div>
      <div class="profile_menu">
        <UserDropdown />
        <UserDropdown />
      </div>
    </div>
  </header>
</template>

<script>
import { inject } from "vue";

import UserDropdown from "./UserDropdown.vue";

export default {
  components: { UserDropdown },
  data() {
    return {
      auth: inject("authentication"),
    };
  },
  methods: {
    logout() {
      this.auth.logout();
    },
  },
};
</script>

<style scoped>
.app-logo img {
  width: auto;
  height: 50px;
  pointer-events: none;
}
.app-logo,
.logo-link {
  height: 50px;
  width: max-content;
}

.message {
  justify-self: center;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 5px;
  height: 65px;
}

.profile_menu {
  height: auto;
  display: flex;
  gap: 10px;
  justify-self: end;

  align-items: center;
}

.profile_menu img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: block;
  border-radius: 50%;
}
</style>
