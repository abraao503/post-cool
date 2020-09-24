<template>
	<div>
		<b-modal id="post-modal" :title="title" ref="my-modal">
			<p class="my-4">{{body}}</p>
			<div v-for="(comment) in comments" :key="comment.id">
				<h5>{{comment.name}}</h5>
				<p>{{comment.body}}</p>
			</div>
		</b-modal>
	</div>
</template>

<script>
//import api from '../services/api';
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
			// visible: async function () {
			// 	try {
			// 		let { data: comments } = await api.get('comments?postId='+this.id);
			// 		console.log(comments);
			// 		this.comments = comments;
			// 	}catch (Erro){
			// 		console.log("erro", Erro);
			// 	}
			// }
			visible () {
				console.log(store.getters.postData);
				const { id, title, body } = store.getters.postData;

				this.id = id;
				this.title = title;
				this.body = body;

				this.toggleModal();
			}
		},

}
</script>