<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Contacts</router-link>
    </div>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  background: rgb(248, 249, 251);
}
</style>
