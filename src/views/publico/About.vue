<template>
  <div class="about">
    <Post v-for="post in posts" :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      :userId="post.userId"
    >
    </Post>

  </div>
    
</template>

<script>
import api from '../../services/api';
import Post from '../../components/Post';

export default {
  name: 'about',
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
    async mounted() {
      try {
        let { data: posts } = await api.get('posts');
        this.posts = posts;
        console.log(posts);
        
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
  
}
</script>