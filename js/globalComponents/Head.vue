<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <router-link class="navbar-brand" to="/">
      <img class="img-fluid" src="static/images/logo.png">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link v-for="navItem in navItems" class="nav-item nav-link" :to="navItem.link">{{ navItem.title }}<span
            class="sr-only">{{ navItem.title }}</span></router-link>
      </div>
      <div class="button-container">
        <router-link to="/login" class="head-button login-button">ورود</router-link>
        <router-link to="/register" class="head-button register-button">ثبت نام</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItems: [
        {title: "خانه", link: "/"},
        {title: "درباره", link: "/about"},

      ]
    }
  }
}
</script>

<style scoped>
nav {
  background: white;
}

.nav-item {
  color: #004948 !important;
  padding-left: 48px !important;
}

.navbar-brand {
  padding-left: 48px;
}

.button-container {
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
  box-sizing: border-box;
  margin-right: auto;
}

.head-button {
  width: 90px;
  text-align: center;
  text-decoration: none;
}

.head-button.register-button {
  box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
  filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
  background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
  border-radius: 15px;
  color: white;
  padding: 10px 15px;
  border: none;
}

.head-button.login-button {
  box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 150, 147, 0.25));
  border-radius: 15px;
  border: solid #03B9B5 3px;
  padding: 10px 15px;
  background-color: white;
  color: #03B9B5;
}
</style>