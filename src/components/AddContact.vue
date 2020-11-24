<template>
	<div class="add-contact" ref="add_contact">
		<h2>Add Contact</h2>
		<form class="add-contact__form form-add" action="">
			<div class="form-add__input-field">
				<label for="add-contact__name">Name</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__name" v-model="info.name">
			</div>

			<div class="form-add__input-field">
				<label for="add-contact__phone">Phone</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__phone" v-model="info.phone">
			</div>

			<div class="form-add__input-field">
				<label for="add-contact__email">Email</label>
				<input class="form-add__input add-contact__input" type="text" id="add-contact__email" v-model="info.email">
			</div>

			<div class="form-add__input-field">
				<button class="form-add__btn add-contact__btn form-add__btn--cancel" @click.prevent="close">Cancel</button>
				<button class="form-add__btn add-contact__btn form-add__btn--submit" @click.prevent="submit" type="submit">Add contact</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			info: {
				id: null,
				name: '',
				phone: '',
				email: ''
			}
		}
	},
	methods: {
		...mapMutations(['createContact']),
		close() {
			this.$emit('close')
		},
		submit() {
			if (this.info.name && this.info.phone) {
				this.info.id = Date.now()
				this.createContact(this.info)
				// добавляем сразу через мутацию потому что пока без бэкенда
				this.close()
			} else {
				alert('Введите имя и телефон')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.add-contact {
	// display: none;
	position: absolute;
	top: 70px;
	left: 50%;
	width: 500px;
	box-sizing: border-box;
	background-color: #fff;
	border: 1px solid #2f9e59;
	border-radius: 2px;
	margin-left: -250px;
	padding: 5px;
	box-shadow: 0px 10px 40px 20px #e1ffec;

	&__input {
		width: 60%;
	}
}

@media (max-width: 500px) {
	.add-contact {
		left: 0;
		width: 100%;
		margin-left: 0;
		font-size: 0.95em;

		&__btn {
			width: 130px;
		}
	}
}
</style>