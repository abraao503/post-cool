<template>
  <div class="createpost">
    <Navbar></Navbar>
    <form ref="form">
        <label for="title">Titulo:<input type="text" v-model="form.title" id="title" required></label>
        <br>
        <label for="body">Texto: <textarea v-model="form.body" id="body" cols="30" rows="10" required></textarea></label>
        <label for="userId"><input type="text" v-model="form.userId" id="userId" hidden></label>
        <button v-on:click="createPost(form)" type="button">ok</button>
    </form>
  </div>
</template>
 
<script>
import { required } from 'vuelidate/lib/validators';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

export default {
  name: 'CreatePost',
  components:{
    Navbar
  },
  data(){
    return {
      form: {
        title: null,
        body: null,
        userId: 1,
      }
    }
  },
  methods: {
    async createPost({title, body, userId}){
    console.log(title, body, userId);
    this.$v.$touch()
    
    if(this.$v.$invalid) {
      console.log('invalido');
      return;
    }

    try {
      const { data } = await api.post('posts',{
        title,
        body,
        userId
      });
      console.log("Post Salvo", data);

      }catch (Erro){
        console.log("erro", Erro);
      }
    }
  },

  validations: {
    form: { 
      title: {
        required,
      },
      body: {
        required,
      },
    }
  }
  
}
</script>
