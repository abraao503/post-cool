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
        <router-link to="" class="brand" v-b-toggle.sidebar-variant><img class="img-home" :src="require('../assets/img/Icon-home.png')"></router-link>
      </b-collapse>
    </b-navbar>
     <b-sidebar id="sidebar-variant" shadow>
      <div class="text-center px-3 py-2">
        <h2>Nome</h2>
        <img :src="require('../assets/img/profile.png')">
        <h4>
          Email<br/>
          Website:<br/>
          City: <br/>
          Company: <br/>
        </h4>
                
        <router-link to="/userpost" class="nav-item color-text"><img :src="require('../assets/img/text.png')">My Posts</router-link>
        <hr>
        <router-link to="/createpost" class="nav-item color-text"><img :src="require('../assets/img/create.png')">Create Post</router-link>

      </div>
    </b-sidebar>
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
  #sidebar-variant{
    background-color: #A591B6 !important;
    color: #ffffff;
  }
</style>
