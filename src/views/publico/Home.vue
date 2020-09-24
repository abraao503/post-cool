<template>
  <div class="home">
    <Modal />
    <button v-on:click="sair">Sair</button>
    <div v-for="post in posts" :key="post.id">
      <Post 
        :title="post.title"
        :id="post.id"
        :body="post.body"
        :userId="post.userId"
      >
      </Post>
    </div>
   
  </div>
    
</template>

<script>
import api from '../../services/api';
import Post from '../../components/Post';
import Modal from '../../components/Modal';

export default {
  name: 'home',
  components: {
    Post,
    Modal
  },
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    try {
      let { data: posts } = await api.get('posts');
      this.posts = posts;
      
    }catch (Erro){
      console.log("erro", Erro);
    }

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