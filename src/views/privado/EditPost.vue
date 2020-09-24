<template>
  <div class="edit-post">
    <Navbar></Navbar>
    <Title text="Edit Post"/>
    <form ref="form">
			<input type="text" v-model="form.title" id="title">
			<br>
			<textarea v-model="form.body" id="body" cols="30" rows="10"></textarea>
			<button v-on:click="editPost" type="button">Edit</button>
    </form>
  </div>
</template>

<script>
import api from '../../services/api';
import Title from '../../components/Title';
import Navbar from '../../components/Navbar';
import store from '../../store';

export default {
  name: 'EditPost',
  components: {
    Navbar,
    Title
  },
  props: {
		title: String,
		body: String
  },
  data(){
    return {
      form: {
        id: 0,
        title: this.title || 'titulo',
        body: this.body || 'testando',
      },
    }
  },

  mounted() {
    console.log(store.getters.postData);
    const { id, title, body } = store.getters.postData;
    this.form.id = id;
    this.form.title = title;
    this.form.body = body;
  },

  methods: {
    async editPost(){
    try {
			const { data } = await api.patch(`posts/${this.form.id}`,{
				title: this.form.title,
				body: this.form.body
			});
			console.log("ok", data);
      }catch (Erro){
        console.log("erro", Erro);
      }
    }
  }
  
}
</script>

<style scoped>
  .edit-post form{
    margin: 50px 40px 0;
    display: flex;
    flex-direction: column;
  }

  .edit-post form textarea {
    resize: none;
  }

  .edit-post form input, textarea {
    margin-bottom: 20px;
    border: 0.5px solid #A591B6;
    border-left: 10px solid #A591B6;
    padding: 10px 20px;
  }

  .edit-post form button {
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
