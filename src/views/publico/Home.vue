<template>
  <div class="home">
    <Navbar></Navbar>
     <!-- <b-overlay
          id="overlay-background"
          show
          :opacity="0"
          :blur="blur"
          rounded="lg"
        > -->
      <div class=" container grid">
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
      <Modal />
    <!-- </b-overlay> -->
  </div>
    
</template>

<script>
import api from '../../services/api';
import Post from '../../components/Post';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';

export default {
  name: 'home',
  components: {
    Post,
    Modal,
    Navbar
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

<style lang="css">
  
</style>