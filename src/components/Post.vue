<template>
    <div class="post">
			<article>
				<h1>{{title}}</h1>
				
				<p class="not-visible">{{id}}</p>

				<p>{{body}}</p>
				
				<blockquote class="not-visible">{{userId}}</blockquote>

				<h4>{{user.name}}</h4> 
				
				<section>
						
					<h5>Comentários</h5>

					<fieldset>
						<div v-for="(comentario) in comentarios" :key="comentario.id">
							<p>{{comentario.name}}</p>
							<p>{{comentario.email}}</p>
							<p>{{comentario.body}}</p>
						</div>
					</fieldset>
				</section>
				</article>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    name: 'Post',
    props: {
        title: String,
        id: Number,
        body: String,
        userId: Number
    },
    data () {
        return {
            comentarios: [],
            user: {
                name: ""
            }
        }
    },
    async mounted() {
      try {
        let { data: comentarios } = await api.get('comments?postId='+this.id);
        this.comentarios = comentarios;

        let { data: users } = await api.get('users?id='+this.userId);
        this.user = users[0];
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
}
</script>

<style lang="css">
    .not-visible{
        display: none;
    }
</style>