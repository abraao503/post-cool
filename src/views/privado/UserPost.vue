<template>
  <div class="userpost">
    <Navbar></Navbar>
    
    <div class="container grid">
      <Post v-for="post in posts" :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"
        :userId="post.userId"
        :isPrivate="true"
      >
      </Post>
    </div>
  </div>
</template>

<script>
import api from '../../services/api';
import Post from '../../components/Post';
import Navbar from '../../components/Navbar';

export default {
  name: 'UserPost',
   components: {
    Post,
    Navbar
  },
  data() {
    return {
      posts: [],
      
      // user: {
      //   name: ""
      // }
    }
  },
    async mounted() {
      let id = localStorage.getItem('id');
      try {
        let { data: postagens } = await api.get('posts?userId='+id);
        this.posts = postagens;

        
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
  
}
</script>