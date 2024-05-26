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
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 55px;
  padding: 5px;
}
.app-logo {
  width: auto;
  height: 90%;
  border-radius: 12px;
  border: 1px solid #a8a5a5;
  pointer-events: none;
}
.logo {
  height: 50px;
  justify-self: start;
}

.message {
  height: 50px;
  justify-self: center;
}
.profile_menu {
  height: 100%;
  justify-self: end;
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
