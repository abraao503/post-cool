<template>
  <div class="editPost">
     <Navbar></Navbar>
    <form ref="form">
			<label for="title">Titulo:<input type="text" v-model="form.title" id="title" required></label>
			<br>
			<label for="body">Texto: <textarea v-model="form.body" id="body" cols="30" rows="10" required></textarea></label>
			<button v-on:click="editPost(form)" type="button">ok</button>
    </form>
  </div>
</template>

<script>
import api from '../../services/api';

import Navbar from '../../components/Navbar';

export default {
  name: 'EditPost',
  components: {
    Navbar
  },
  props: {
		id: Number,
		title: String,
		body: String
  },
  data(){
    return {
      form: {
        title: this.title || 'titulo',
        body: this.title || 'testando',
      }
    }
  },
  methods: {
    async editPost({title, body}){

    try {
			const { data } = await api.post(`posts/${this.id}`,{
				title,
				body
			});
			console.log("ok", data);
      }catch (Erro){
        console.log("erro", Erro);
      }
    }
  }
  
}
</script>
