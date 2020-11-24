<template>
<!-- <div>
<h1>Contact</h1>
	{{ id }} <br>
	{{ contactInfo }} <br>
	{{ index }} <br>
	<button @click.prevent="updateInfo()">Update</button>
</div> -->

<div id="contact">
		<form class="add-contact__form form-add">
			<div class="form-add__input-field" 
				v-for="name in Object.keys(contactInfo)" :key="name"
			>
				<input class="form-add__input" type="text" :placeholder="name"
					:disabled="disabled.indexOf(name) !== -1 ? true : false"
				>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info[name]"
					:disabled="name === 'id'? true : false"
				>
			</div>

			<!-- <div class="form-add__input-field">
				<input class="form-add__input" type="text" placeholder="Phone" disabled>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info.phone">
			</div> -->

			<div class="form-add__input-field">
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
			},
			disabled: ['id', 'name', 'phone', 'email']
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