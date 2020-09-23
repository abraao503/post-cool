<template>
  <div class="userpost">
    <Post v-for="post in posts" :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      :userId="post.userId"
    >
    </Post>
    
    <!-- <h1></h1>
    <div v-for="(post) in posts" :key="post.id">
      <h4>Titulo:{{ post.title }}</h4>
      <p>{{ post.body }}</p>
      <blockquote>Autor: {{ user.name }}</blockquote>
    </div>
    <button>Editar</button>
    <button>Deletar</button> -->
  </div>
</template>

<script>
import api from '../../services/api';
import Post from '../../components/Post';

export default {
  name: 'UserPost',
   components: {
    Post
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
      try {
        let { data: postagens } = await api.get('posts?userId=1');
        this.posts = postagens;

        
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
  
}
</script>