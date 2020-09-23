<template>
  <div class="home">
    <form autocomplete="off" @submit.prevent="login">
      <input type="text" v-model="user.name" id="username" placeholder="username">
      <input type="password" v-model="user.zipcode" id="password" placeholder="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script>

import api from '../services/api';

export default {
  name: 'Home',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login: async function () {
      console.log(this.user);
      try {
        let { data: user } = await api.get('users?name='+this.user.name);

        if(user.length && user[0].name === this.user.name && user[0].address.zipcode === this.user.zipcode){
          console.log('true');
          
        }else{
          alert('Usuario nao existe ou senha incorreto');
        }
      }catch (Erro){
        console.log("Erro", Erro);
      }

    }
  }
  
}
</script>
