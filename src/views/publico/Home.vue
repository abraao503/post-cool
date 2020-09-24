<template>
  <div class="home">
    <Navbar></Navbar>
    
    <Modal 
      :title="actualPost.title"
      :body="actualPost.body"
      :id="actualPost.id"
      :visible="modalToggleFlag"
    />
    <div v-for="post in posts" :key="post.id">
      <Post 
        :title="post.title"
        :id="post.id"
        :body="post.body"
        :userId="post.userId"
      >
      </Post>
      <b-button 
        v-b-modal.post-modal v
        v-on:click="setActualPost(post.id, post.title, post.body)"
      >
        Visualizar
      </b-button>
    </div>
   
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
      modalToggleFlag: false,
      actualPost: {
        id: 0,
        title: '',
        body: ''
      }
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
    setActualPost(id, title, body) {
      this.actualPost.id = id;
      this.actualPost.title = title;
      this.actualPost.body = body;

      this.modalToggleFlag = !this.modalToggleFlag;
    },
    sair: function (event){
      if(event){
        localStorage.clear();
        this.$router.push('/login');
      }
    }
    
  }
  
}
</script>