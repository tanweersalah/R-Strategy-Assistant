<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img
            alt="R Strategy logo"
            class="app-logo"
            src="@/assets/n-logo-h.png"
          />
        </router-link>
      </div>
      <div class="message"></div>
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

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(2, 2, 2, 0.2);
}

.logo {
  width: 20%;
  height: 50px;
}
.app-logo {
  width: auto;
  height: 90%;
  border-radius: 12px;
  border: 1px solid #a8a5a5;
  pointer-events: none;
}

.message {
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile_menu {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: end;
  overflow: hidden;
}

.profile_menu img {
  width: 50px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #ccc;
  display: block;
  border-radius: 50%;
}
</style>
