<template>
	<div class="form-add__input-field">
		<input class="form-add__input" type="text" v-model="field.key">
			<span class="separator">:</span>
		<input class="form-add__input" type="text" v-model="field.value">
	</div>
</template>

<script>
export default {
	data() {
		return {
			field: {
				key: '',
				value: ''
			}
		}
	},
	created() {
		this.$parent.$on('save', this.saveInfo);
		// this.field.key = ''
		// this.field.value = ''
	},
	methods: {
		saveInfo() {
			this.$emit('saveInfo', this.field)
		}
	}
}
</script>