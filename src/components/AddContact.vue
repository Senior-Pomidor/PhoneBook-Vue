<template>
	<div class="add-contact" ref="add_contact">
		<h2>Add Contact</h2>
		<form class="add-contact__form" action="">
			<div class="add-contact__input-field">
				<label for="add-contact__name">Name</label>
				<input class="add-contact__input" type="text" id="add-contact__name" v-model="info.name">
			</div>

			<div class="add-contact__input-field">
				<label for="add-contact__phone">Phone</label>
				<input class="add-contact__input" type="text" id="add-contact__phone" v-model="info.phone">
			</div>

			<div class="add-contact__input-field">
				<label for="add-contact__email">Email</label>
				<input class="add-contact__input" type="text" id="add-contact__email" v-model="info.email">
			</div>

			<div class="add-contact__input-field">
				<button class="add-contact__btn add-contact__btn--cancel" @click.prevent="close">Cancel</button>
				<button class="add-contact__btn add-contact__btn--submit" @click.prevent="submit" type="submit">Add contact</button>
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

	&__form {
		display: flex;
		flex-direction: column;
		font-size: 1.3em;
	}

	&__input-field {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// border: 1px solid green;
		padding: 10px 5px;

		&:not(:first-child) {
			margin-top: 10px;
		}

		&:not(:last-child) {
			border-bottom: 1px solid black;
		}
	}

	&__input {
		width: 60%;
		padding: 5px;
		border: 1px solid transparent;
		border-radius: 3px;
		background-color: #ebedf7;

		&:focus {
			background-color: transparent;
			border-color: #2f9e59;
			outline: none;
		}
	}

	&__btn {
		// margin-top: 30px;
		width: 140px;
		color: #fff;
		font-size: 1em;
		padding: 5px 10px;
		border-radius: 3px;
		border: none;
		outline: none;

		&--cancel {
			background-color: rgb(236, 78, 78);

			&:hover {
				background-color: rgb(207, 40, 40);
			}

			&:active {
				background-color: rgba(224, 81, 81, 0.767);
			}
		}

		&--submit {
			background-color: #2f9e59;

			&:hover {
				background-color: #118d40;
			}

			&:active {
				background-color: rgb(85, 212, 134);
			}
		}
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