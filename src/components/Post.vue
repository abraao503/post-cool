<template>
    <div class="post">
			<article class="artigos" >
				<h1 v-if="title.length<30">{{title}}</h1>
				<h1 v-else>{{title.substring(0, 30) + '...'}}</h1>
				<p class="not-visible">{{id}}</p>

				<p class="post-body">{{body.substring(0, 50) + '...'}}</p>
				
				<blockquote class="not-visible">{{userId}}</blockquote>

				<p class="author">{{'Author: ' + user.name}}</p> 
				
				<div class="icon-container">
					<button v-b-toggle="'collapse-2'" class="btn-post icon-comentario"></button>
					<button  v-on:click="viewPost(id, title, body)" class="btn-post icon-modal"></button>
				</div>
				<section>
					<b-collapse id="collapse-2">
						<b-card>
							<fieldset>
								<div v-for="(comentario) in comentarios" :key="comentario.id">
									<p>{{comentario.name}}</p>
									<p>{{comentario.email}}</p>
									<p>{{comentario.body}}</p>
								</div>
							</fieldset>
						</b-card>
					</b-collapse>
				</section>
			</article>
    </div>
</template>

<script>
import api from '../services/api';
import store from '../store';

export default {
	name: 'Post',
	components: {
		
	},
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
			},
			modalToggleFlag: false,
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

	methods: {
		viewPost(id, title, body) {
			store.commit('newPost', {id, title, body});
			store.commit('toggleModalVisible');
		},

		toggleVisibilityModal() {
			this.modalToggleFlag = !this.modalToggleFlag;
		}
	}
}
</script>

<style lang="css">
	
	.not-visible{
		display: none;
	}

	.post {
		margin-bottom: 20px;
		width: 354px;
		height: 320px;
		padding: 25px 10px;
		border-radius: 5px;
		border: 1px solid #D4D2D2;
		overflow: auto; 
	}

	.post h1 {
		font-weight: 900;
		font-size: 18px;
		text-align: center;
		color: #000;
	}

	.post-body {
		margin: 30px 0;	
		color: #000;
	}

	.author {
		font-size: 12px;
		text-align: end;
		color: #000;
	}

	.icon-container {
		display: flex;
		align-self: flex-end;
		align-items: center;
		justify-content: flex-end;
		margin-top: 30px;
	}
	.icon-comentario{
		background-color: #75C310;
		background-image: url(../assets/img/comentarios.png);
		background-repeat: no-repeat;
		background-position: center;
	}
	.icon-modal{
		background-color: #007BFF;
		background-image: url(../assets/img/modal-icon.png);
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.artigos{
		display: flex;
		flex-direction: column;
	}
</style>