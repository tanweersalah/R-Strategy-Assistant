<template>
  <q-header elevated class="app-header">
    <q-toolbar>
      <router-link to="/">
        <div class="app-logo">
          <q-img alt="R Strategy logo" src="@/assets/Catena-X_Logo.png" />
        </div>
      </router-link>

      <q-toolbar-title></q-toolbar-title>

      <router-link to="/learn-more">
        <div class="learn-more">
          <q-avatar>
            <q-img
              alt="catena x learn more image"
              src="@/assets/catena-logo.jpg"
            />
          </q-avatar>

          <p>Learn More</p>
        </div>
      </router-link>

      <q-icon name="account_circle" class="account-icon">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Account</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Change Password</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Search History</q-item-section>
            </q-item>
            <q-separator />

            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Logout</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-icon>
    </q-toolbar>
  </q-header>
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
.app-header {
  padding: 5px;
  background-color: rgb(255, 255, 255);
}
.app-logo {
  height: 50px;
  width: 200px;
}
.learn-more {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}
.learn-more p {
  font-size: 8px;
  font-weight: 500;
  color: black;
  margin: 0;
}

.account-icon {
  color: #000000;
  font-size: 50px;
}
.account-icon:hover {
  color: #000000ca;
  cursor: pointer;
}
</style>
