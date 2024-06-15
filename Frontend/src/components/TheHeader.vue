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
        <router-link to="/learn-more">
          <div class="learn-more-icon">
            <img
              alt="catena x learn more image"
              src="@/assets/catena-logo.jpg"
            />
            <p>Learn More</p>
          </div>
        </router-link>

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

.learn-more-icon img {
  margin-top: 5px;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
}
.learn-more-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.learn-more-icon p {
  font-size: 8px;
  font-weight: 500;
  color: black;
}
</style>
