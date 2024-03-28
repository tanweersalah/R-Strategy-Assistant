<template>
  <footer class="footer-content">
    <div class="links">
      <div><router-link to="/documentation/?path=docs">Help</router-link></div>
      <div><router-link to="/contact">Contact</router-link></div>
      <div><router-link to="/imprint">Imprint</router-link></div>
      <div><router-link to="/privacy">Privacy</router-link></div>
      <div><router-link to="/terms">Terms of Service</router-link></div>
      <div><router-link to="/cookiepolicy">Cookies</router-link></div>
      <div>
        <router-link to="/thirdpartylicenses">Third Party Licenses</router-link>
      </div>
      <div><router-link to="#" id="legalNotice">Legal notice</router-link></div>
    </div>
    <div class="copyright-container">
      <div class="copyright">
        Copyright © Catena-X Automotive Network.
        <a
          href="https://github.com/tanweersalah/R-Strategy-Assistant/tree/master/RSA-Frontend"
          target="_blank"
          >v0.0.1</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
.footer-content {
  bottom: 0;

  width: 100%;
  background-color: #f3fcf0;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.links {
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
}

.links div {
  margin-right: 10px;
}

.links div:last-child {
  margin-right: 0;
}

.links router-link {
  text-decoration: none;
  color: #333;
}
.copyright-container {
  text-align: right;

  font-size: 10px;
}

.copyright-container router-link {
  display: flex;
  justify-content: center;
  color: #333;
}

#legalNotice {
  text-decoration: none;
  color: #333;
  font-size: 10px;
}
</style>
