<template>
  <header>
    <div class="container header-container">
      <router-link to="/" class="logo-link">
        <div class="app-logo">
          <img alt="R Strategy logo" src="@/assets/n-logo-h.png" />
        </div>
      </router-link>

      <div class="message"><button @click="logout">Logout</button></div>
      <div class="profile_menu">
        <img
          alt="Profile image"
          class="profile-image"
          src="@/assets/user-image.png"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { inject } from "vue";

export default {
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
  border-radius: 12px;
  border: 1px solid #a8a5a5;
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
  grid-template-columns: 1fr 3fr 1fr;
  padding: 5px;
  height: 65px;
}

.profile_menu {
  height: auto;
  justify-self: end;
  align-content: center;
  overflow: hidden;
}

.profile_menu img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: block;
  border-radius: 50%;
}
</style>
