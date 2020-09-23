<template>
  <div class="login container-fluid bg-fundo">
    <div class="row">
      <div class="col-4">
        <div class="logo text-center">
          <img :src="require('../assets/img/login-icon.png')" alt="logo" class="logo-icon">
          <div class="logo-text">CoolPost</div>
          <hr>
          <p>Publish your articles, thoughts, ideas.</p>
        </div>
      </div>
      <div class="col-8 centralizar">
        <div>
          <h1 class="title text-center">Sing In</h1>
          <hr class="line-singin">
        </div>
          <form autocomplete="off" @submit.prevent="login" class="login-form">
            <input type="text" v-model="user.name" id="username" placeholder="Username">
            <input type="password" v-model="user.zipcode" id="password" placeholder="Password">
            <button>Login</button>
          </form>
      </div>
    </div>
   <div class="pessoas"></div>
  </div>
</template>

<script>

import api from '../services/api';

export default {
  name: 'login',
  data () {
    return {
      user: {},
      id: null
    }
  },
  methods: {
    mounted() {
      if (localStorage.id) {
        this.id = localStorage.id;
      }
    },

    login: async function () {
      console.log(this.user);
      try {
        let { data: user } = await api.get('users?name='+this.user.name);

        if(user.length && user[0].name === this.user.name && user[0].address.zipcode === this.user.zipcode){
          this.id = user[0].id;
          console.log('true'+ this.id);
          
          localStorage.id = JSON.stringify(this.id);
          this.$router.push('/');

          console.log('local:'+localStorage.id);

        }else{
          alert('Usuario nao existe ou senha incorreto');
        }
      }catch (Erro){
        console.log("Erro", Erro);
      }
    },
  }
  
}
</script>

<style lang="css">
  .bg-fundo {
    height: 100vh;
    background-image: url(../assets/img/background.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1114px;
  }
  .pessoas{
    width: 439px;
    height: 500px;
    background-image: url(../assets/img/login-img.png);
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: contain;
    position: fixed;
    bottom: 0;
  }
  .centralizar{
    height: 100vh;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
  }
  .line-singin{
    width: 500px;
    color: #B5A2A2;
  }
  .login-form{
    width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .login-form input {
    height: 50px;
    color: #746D6D;
		border: 0.5px solid #A591B6;
		border-left: 6px solid #A591B6;
		padding: 5px 8px;
		margin-bottom: 25px;
  }
  .login-form input:focus {
    border-color: #B5A2A2;
  }
  .login-form button{
    height: 50px;
    background-color: #A591B6;
		border: 0;
		color: #ffffff;
		padding: 6px;
		font-weight: bold;
    margin-top: 10px;
    box-shadow: 2px 2px 5px #A591B6;
  }
  .logo-icon{
    width: 90px;
    margin: 0 auto;
  }
  .logo-text{
    font-size: 40px;
    font-weight: 900;
    color: #ffffff;
  }
  .logo{
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
  .logo hr{
    background-color: #ffffff;
    width: 350px;
    margin-top: 0;
  }
  .logo p {
    font-size: 20px;
  }
</style>