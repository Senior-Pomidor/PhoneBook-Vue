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
$remove-color: #a6a9b8;
$alert-color: #f00;

.remove {
	position: relative;
	font-size: 30px;
	height: 0.5em;
	width: 0.4em;
	margin-top: 10px;
	border: 0.07em solid $remove-color;
	border-radius: 0 0 0.05em 0.05em;
	background-image: linear-gradient(
		to right,
		transparent 0.17em,
		$remove-color 0.17em,
		$remove-color 0.24em,
		transparent 0.24em
	);

	&::before {
		position: absolute;
		left: -0.125em;
		bottom: 0.6em;
		height: 0.07em;
		width: 0.65em;
		content: "";
		background-color: $remove-color;
	}

	&::after {
		position: absolute;
		left: 0.055em;
		bottom: 0.67em;
		height: 0;
		width: 0.25em;
		content: "";
		border-bottom: 0.07em solid $remove-color;
		border-left: 0.02em solid transparent;
		border-right: 0.02em solid transparent;
	}

	&--field {
		font-size: 25px;
		margin-left: 0.25em;
		margin-top: 0.2em;
	}

	&:hover {
		border-color: $alert-color;
		background-image: linear-gradient(
			to right,
			transparent 0.17em,
			$alert-color 0.17em,
			$alert-color 0.24em,
			transparent 0.24em
		);

		&::after {
			border-color: $alert-color;
		}

		&::before {
			background-color: $alert-color;
		}
	}

	&:active {
		opacity: 0.5;
	}
}

@media(max-width: 425px) {
	.remove--field {
		margin-left: auto;
		margin-top: 0.5em;
	}
}
</style>