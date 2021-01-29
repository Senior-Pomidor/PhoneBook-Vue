<template>
	<div class="form-add__input-field">
		<input class="form-add__input" type="text" v-model="field.key">
			<span class="separator">:</span>
		<input class="form-add__input" type="text" v-model="field.value">
		<a class="remove remove--field" @click.prevent="remove"></a>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

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
		...mapActions(['removeField']),
		saveInfo() {
			this.$emit('saveInfo', this.field)
		},
		remove() {
			// удаление компонента
			this.$destroy();
			// удаление из DOM родительского компонента
			this.$el.parentNode.removeChild(this.$el);
			
			if (this.field.key || this.field.value) {
				// удаление из store
				this.removeField(Object.values(this.field))
				alert('Запись успешно удалена.')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@media(max-width: 425px) {
	.remove--field {
		margin-left: auto;
		margin-top: 0.5em;
	}
}
</style>