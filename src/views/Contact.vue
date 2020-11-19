<template>
<div>
<h1>Contact</h1>
	{{ id }} <br>
	{{ info }} <br>
	{{ index }} <br>
	<button @click.prevent="updateInfo(index, 'email', 'changed@mail.ru')">Update</button>
</div>
	
</template>

<script>
export default {
	// data() {
	// 	return {
			
	// 	}
	// },
	mounted() {
		// console.log(this.data)
	},
	computed: {
		id() {
			return this.$route.params.id
		},
		info() {
			let contacts = this.$store.getters.allContacts
			return contacts.find(contact => contact.id === this.id)
		},
		index() {
			let contacts = this.$store.getters.allContacts
			return contacts.findIndex(contact => contact.id === this.id)
		}
	},
	methods: {
		updateInfo(index, key, value) {
			let data = {index, key, value}
			this.$store.dispatch('updateContactInfo', data)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>