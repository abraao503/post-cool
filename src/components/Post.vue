<template>
    <div class="post">
			<article>
				<h1>{{title}}</h1>
				
				<p class="not-visible">{{id}}</p>

				<p class="post-body">{{body.substring(0, 50) + '...'}}</p>
				
				<blockquote class="not-visible">{{userId}}</blockquote>

				<p class="author">{{'Author: ' + user.name}}</p> 
				
				<div class="icon-container">
					<img src="../assets/img/comments.png" alt="comments-icon" />
					<img src="../assets/img/view.png" alt="view-icon" v-on:click="viewPost(id, title, body)"/>
				</div>
				<section>
						
					<!-- <h5>Comentários</h5>

					<fieldset>
						<div v-for="(comentario) in comentarios" :key="comentario.id">
							<p>{{comentario.name}}</p>
							<p>{{comentario.email}}</p>
							<p>{{comentario.body}}</p>
						</div>
					</fieldset> -->
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
		width: 270px;
		padding: 25px 10px;
		border-radius: 5px;
		border: 1px solid #D4D2D2;
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
		justify-content: end;
		margin-top: 30px;
	}

	.icon-container img {
		width: 32px;
		margin: 0 4px;
	}

</style>