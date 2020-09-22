<template>
  <article class="about">
    
    <Post v-for="(post) in posts" :key="post.id"
      v-bind:title="post.title"
      v-bind:body="post.body"
      v-bind:id="post.id"
      v-bind:aut="post.userId"
    >
    </Post>
  </article>
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
      posts: [],
      comments: {}
    }
  },
    async mounted() {
      try {
        let { data: postagens } = await api.get('posts');
        this.posts = postagens;

        // for (const post in this.posts) {
        //   //  let { data: comentarios } = await api.get('/comments?postId='+post.id);
        //   //  this.comments = comentarios;

        //    console.log(post.id);
        // }

        
        
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
  
}
</script>