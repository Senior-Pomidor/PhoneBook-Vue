<template>
<div>
<h1>Contact</h1>
	{{ id }} <br>
	{{ contactInfo }} <br>
	{{ index }} <br>
	<button @click.prevent="updateInfo()">Update</button>
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

</style>