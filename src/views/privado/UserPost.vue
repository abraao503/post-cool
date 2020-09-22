<template>
  <div class="userpost">
    <h1></h1>
    <div v-for="(post) in posts" :key="post.id">
      <h4>Titulo:{{ post.title }}</h4>
      <p>{{ post.body }}</p>
      <blockquote>Autor: {{ user.name }}</blockquote>
    </div>
    <button>Editar</button>
    <button>Deletar</button>
  </div>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'UserPost',
  data() {
    return {
      posts: [],
      user: {
        name: ""
      }
    }
  },
    async mounted() {
      try {
        let { data: postagens } = await api.get('posts?userId=1');
        this.posts = postagens;

        let { data: usuario } = await api.get('users?id=1');
        this.user = usuario[0];
        console.log(usuario);
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
  
}
</script>