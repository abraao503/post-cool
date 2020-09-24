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
      <div class="text-center px-3 py-2 body-sidebar">
        <h2>{{user.name}}</h2>
        <img :src="require('../assets/img/profile.png')">
        <h6>
          Email: {{user.email}}<br/>
          Website: {{user.website}}<br/>
          City: {{user.address.city}}<br/>
          Company: {{user.company.name}} <br/>
        </h6>
        <div class="group-link text-left mt-5">
          <router-link to="/userpost" class="nav-item color"><img :src="require('../assets/img/text_wh.png')">My Posts</router-link>
          <hr>
          <router-link to="/createpost" class="nav-item color"><img :src="require('../assets/img/create_wh.png')">Create Post</router-link>
          
        </div>     

      </div>
    </b-sidebar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
      user: {
        address: [],
        company: []
      } 
    }
  },

  props:{
    postTitle: String
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
  },
  methods: {
      sair: function (event){
        if(event){
          localStorage.clear();
          this.$router.push('/login');
        }
      },
      
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
  .body-sidebar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .body-sidebar, .color {
    color: #ffffff;
  }
  .body-sidebar > .color{
    text-align: left;
  }
  .body-sidebar h2, .body-sidebar h6{
    line-height: 1.6;
  }

  .group-link{
    width: 250px;
  }
  .body-sidebar > .group-link > hr{
    background-color: #ffffff;
  } 

  .body-sidebar > .group-link > .color:hover{
    color: #ffffff;
  }

</style>
