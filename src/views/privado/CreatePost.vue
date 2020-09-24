<template>
  <div class="create-post">
    <Navbar></Navbar>
    <Title text="Create Posts"/>
    <form ref="form">
      <input type="text" v-model="form.title" id="title" placeholder="Title">
      <br>
      <textarea v-model="form.body" id="body" cols="30" rows="10" placeholder="Enter your text"></textarea>
      <button v-on:click="createPost(form)" type="button">Publish</button>
    </form>
  </div>
</template>
 
<script>
import { required } from 'vuelidate/lib/validators';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import Title from '../../components/Title';

export default {
  name: 'CreatePost',
  components:{
    Navbar,
    Title
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

<style scoped>
  .create-post form{
    margin: 50px 40px 0;
    display: flex;
    flex-direction: column;
  }

  .create-post form textarea {
    resize: none;
  }

  .create-post form input, textarea {
    margin-bottom: 20px;
    border: 0.5px solid #A591B6;
    border-left: 10px solid #A591B6;
    padding: 10px 20px;
  }

  .create-post form button {
    height: 40px;
    background-color: #A591B6;
		border: 0;
		color: #ffffff;
		padding: 6px;
		font-weight: bold;
    margin-top: 10px;
    box-shadow: 2px 2px 5px #A591B6;
    align-self: flex-end;
    width: 260px;
  }
</style>
