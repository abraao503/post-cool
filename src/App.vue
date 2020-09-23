<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/createpost">Cadastrando Post</router-link> |
      <router-link to="/userpost">Meus Post</router-link> |
      <router-link to="/editpost">Editar Post</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}