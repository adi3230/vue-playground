<template>
	<div>
		<h1>Dynamic Forms</h1>
		<vue-form-generator :schema="schema" 
							:model="model"/>
		<p>{{ model }}</p>

	</div>
</template>
<script>
import fieldAwesome from './fieldAwesome';

export default {
	name: 'DynamicForms',
	components: {
		fieldAwesome: fieldAwesome,
	},
	data() {
		return {
			schema: {
				fields: [
					{
						type: "input",
						inputType: "text",
						label: "Name",
						model: "name"
					},
					{
						type: "input",
						inputType: "number",
						id: "current_age",
						label: "Age",
						model: "age"
					},
					{
						type: 'awesome',
						label: 'Custom Field',
						model: 'username'
					}

    		]},
			model: {}
		}
	}
}
</script>

