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
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			// data: {
			// 	name: '',
			// 	phone: '',
			// 	email: ''
			// }
		}
	},
	mounted() {
		this.updateContactInfo(this.id)
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
		...mapMutations(['updateContactInfo']),
		updateInfo() {
			console.log(this.contactInfo)
		}
	},
	beforeDestroy() {
		// для очистки contact в store
		this.updateContactInfo()
	}
}
</script>

<style lang="scss" scoped>

</style>