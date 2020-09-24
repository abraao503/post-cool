<template>
  <div class="navbar justify-content-end">
     <b-navbar>
      <b-collapse id="nav-collapse " is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-item color-text"><img :src="require('../assets/img/home.png')">Home</router-link>
          <router-link to="/userpost" class="nav-item color-text"><img :src="require('../assets/img/text.png')">My Posts</router-link>
          <router-link to="/createpost" class="nav-item color-text"><img :src="require('../assets/img/create.png')">Create Post</router-link>
          <button v-on:click="sair" class="btn-logout color-text"> <img :src="require('../assets/img/logout.png')">Logout</button>
        </b-navbar-nav>
        <router-link to="" class="brand"><img class="img-home" :src="require('../assets/img/Icon-home.png')"></router-link>
      </b-collapse>
    </b-navbar>
    <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/createpost">Cadastrando Post</router-link> |
      <router-link to="/userpost">Meus Post</router-link> |
      <router-link to="/editpost">Editar Post</router-link>
     
     <button v-on:click="sair">logout</button> -->
  </div>
</template>

<script>

export default {
  name: 'navbar',
  props:{
    postTitle: String
  },
  methods: {
     sair: function (event){
      if(event){
        localStorage.clear();
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style lang="css">
  .color-text{
    color: #000000;
    margin: 15px;
    margin-right: 20px;
  }
  .color-text:hover{
    text-decoration: none;
    color: #000000;
  }
  .color-text img, .color-text button{
    width: 24px;
    height: 24px;
    margin-top: -1px;
    margin-right: 10px;
  }
  .img-home{
    width: 200px;
  }
  .btn-logout{
    background-color: #ffffff;
    border: none;
    margin: 5px;
  }
</style>
