<template>
    <div class="post">
         <article class="about">
            <div>
                <h1 {{title}}></h1>
                <p {{body}}></p>
                <p {{id}}></p>
                <blockquote {{auth}}></blockquote>
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
            </div>
        </article>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    name: 'Post',
    props: {
        title: String,
        body: String,
        id:  Number,
        aut: Number,
    },
    data () {
        return {
            comentarios: []
        }
    },
    async mounted() {
      try {
        let { data: comentarios } = await api.get('/comments?postId='+this.id);
        this.comentarios = comentarios;

        
      }catch (Erro){
        console.log("erro", Erro);
      }
  
    },
}
</script>