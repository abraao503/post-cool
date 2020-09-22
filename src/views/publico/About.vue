<template>
  <div class="about">
    <div v-for="(post) in posts" :key="post.id">
      <h1>Titulo:{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <blockquote>Autor: {{ post.userId }}</blockquote>
    </div>
  </div>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'about',
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    try {
      let {data} = await api.get('posts');
      this.posts = data;

    }catch (Erro){
      console.log("erro", Erro);
    }

  },
}
</script>