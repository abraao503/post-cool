<template>
	<div>
		<b-modal id="post-modal" :title="title">
			<p class="my-4">{{body}}</p>
			<div v-for="(comment) in comments" :key="comment.id">
				<h5>{{comment.name}}</h5>
				<p>{{comment.body}}</p>
			</div>
		</b-modal>
	</div>
</template>

<script>
import api from '../services/api';

export default {
    name: 'Modal',
    props: {
			id: Number,
			title: String,
			body: String,
			visible: Boolean,
    },
    data () {
			return {
				comments: [],
			}
		},
		
		watch: {
			visible: async function () {
				try {
					let { data: comments } = await api.get('comments?postId='+this.id);
					console.log(comments);
					this.comments = comments;
				}catch (Erro){
					console.log("erro", Erro);
				}
			}
		},
}
</script>