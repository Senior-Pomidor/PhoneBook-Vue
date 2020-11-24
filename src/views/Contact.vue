<template>
<!-- <div>
<h1>Contact</h1>
	{{ id }} <br>
	{{ contactInfo }} <br>
	{{ index }} <br>
	<button @click.prevent="updateInfo()">Update</button>
</div> -->

<div id="contact">
		<form class="add-contact__form form-add" action="">
			<div class="form-add__input-field">
				<input class="form-add__input" type="text" placeholder="Name" disabled>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info.name">
			</div>

			<div class="form-add__input-field">
				<input class="form-add__input" type="text" placeholder="Phone" disabled>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info.phone">
			</div>

			<div class="form-add__input-field">
				<input class="form-add__input" type="text" placeholder="Email" disabled>
				<span class="separator">:</span>
				<input class="form-add__input" type="email" v-model="info.email">
			</div>

			<div class="form-add__input-field">
				<input class="form-add__input" type="text">
				<span class="separator">:</span>
				<input class="form-add__input" type="text">
			</div>

			<div class="form-add__input-field">
				<input class="form-add__input" type="text">
				<span class="separator">:</span>
				<input class="form-add__input" type="text">
			</div>

			<div class="form-add__input-field">
				<input class="form-add__input" type="text">
				<span class="separator">:</span>
				<input class="form-add__input" type="text">
			</div>

			<div class="form-add__input-field">
				<!-- <button class="add-contact__btn add-contact__btn--cancel" @click.prevent="close">Cancel</button> -->
				<button class="form-add__btn form-add__btn--submit" type="submit">Add info</button>
				<button class="form-add__btn form-add__btn--submit" type="submit">Save info</button>
			</div>
		</form>
	</div>
	
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
	data() {
		return {
			info: {
				name: '',
				phone: '',
				email: ''
			}
		}
	},
	mounted() {
		this.setContactInfo(this.id)
		this.info = this.contactInfo
	},
	computed: {
		id() {
			return this.$route.params.id
		},
		index() {
			// чтобы менять в contacts в сторе
			let contacts = this.$store.getters.allContacts
			return contacts.findIndex(contact => contact.id === this.id)
		},
		contactInfo() {
			return this.$store.getters.contact
		}
	},
	methods: {
		...mapMutations(['setContactInfo']),
		...mapActions(['changeContact']),
		updateInfo() {
			this.info.id = this.id
			this.changeContact(this.info)
		}
	},
	beforeDestroy() {
		// для очистки contact в store
		this.setContactInfo()
	}
}
</script>

<style lang="scss" scoped>
#contact {
	border-radius: 2px;
	margin: 0 auto;
}

.form-add {
	width: 100%;
	max-width: 570px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	font-size: 1.3em;
	border: 1px solid red;

	&__input-field {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid blue;
		padding: 10px 5px;

		&:not(:first-child) {
			margin-top: 10px;
		}

		&:not(:last-child) {
			border-bottom: 1px solid black;
		}
	}

	&__input {
		width: 45%;
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
		width: 140px;
		color: #fff;
		font-size: 1em;
		padding: 5px 10px;
		border-radius: 3px;
		border: none;
		outline: none;

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

@media(max-width: 425px) {
	.form-add {
		&__input-field {
			flex-wrap: wrap;
		}
		&__input {
			width: 100%;

			&:not(:first-child) {
				margin-top: 0.5em;
			}
		}
		.separator {
			display: none;
		}
	}
}
</style>