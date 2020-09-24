<template>
	<div>
		<b-modal id="post-modal" :title="title" size="xl"  ref="my-modal" scrollable>
			<p class="my-4">{{body}}</p>
			<h6>Comentários</h6>
			<hr>
			<div v-for="(comment) in comments" :key="comment.id">
				<fieldset class="bg-silver">
					<h5>{{comment.name}}</h5>
					<p>{{comment.body}}</p>
				</fieldset>
			</div>
		</b-modal>
	</div>
</template>

<script>
import api from '../services/api';
import store from '../store';

export default {
    name: 'Modal',
    data () {
			return {
				comments: [],
				id: 0,
				title: '',
				body: '',
			}
		},

		mounted() {
			this.title1 = store.getters.postData.title;
		},

		methods: {
			toggleModal() {
        this.$refs['my-modal'].toggle()
      }
		},

		computed: {
			visible () {
				return store.getters.modalIsVisible;
			}
		},
		
		watch: {
			
			async visible ()  {
				console.log(store.getters.postData);
				const { id, title, body } = store.getters.postData;

				this.id = id;
				this.title = title;
				this.body = body;

				try {
					let { data: comments } = await api.get('comments?postId='+this.id);
					console.log(comments);
					this.comments = comments;
				}catch (Erro){
					console.log("erro", Erro);
				}

				this.toggleModal();
			}
		},

}
</script>

<style lang="css">
	.bg-silver{
		background-color: #caa9d691;
		margin: 15px;
		padding: 10px;
		border-radius: 8px;
	}
</style>