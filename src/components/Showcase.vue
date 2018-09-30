<template>
	<div>
		<h1> Hello!</h1>
		<table>
			<tr>
				<th>Name</th>
				<th>Status</th>
			</tr>
			<tr v-for="character in characters" :key="character.id">
				<td>{{character.name}}</td>
				<td>{{character.status}}</td>
			</tr>
		</table>

	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {

	computed: {
		...mapState({
			characters: 'characters'
		}),
	},
	created() {
		this.$store.dispatch('fetchCharacters');
	}
	
}
</script>
