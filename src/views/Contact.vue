<template>
	<div id="contact">
		<form class="add-contact__form form-add" id="contact-form-add" @submit.prevent="updateInfo()">
			<div class="form-add__input-field" 
				v-for="name in Object.keys(contactInfo)"
				:key="name"
				v-show="name !== 'id'"
			>
				<input class="form-add__input" type="text" :placeholder="name"
					:disabled="disabled.indexOf(name) !== -1 ? true : false"
				>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info[name]"
					:disabled="name === 'id'? true : false"
				>
			</div>

			<InputField v-for="field in fields" :key="field" @saveInfo="saveFieldInfo"/>
			<!-- <component v-bind:is="InputField"></component> -->

			<div class="form-add__input-field">
				<button class="form-add__btn form-add__btn--submit" @click.prevent="addField()">Add info</button>
				<button class="form-add__btn form-add__btn--submit" type="submit">Save info</button>
			</div>
		</form>
	</div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import { mapActions, mapMutations } from 'vuex'

export default {
	components: {
		InputField
	},
	data() {
		return {
			info: {
				name: '',
				phone: '',
				email: ''
			},
			disabled: ['id', 'name', 'phone', 'email'],
			fields: []
		}
	},
	mounted() {
		this.setContactInfo(this.id)
		// console.log(this.contactInfo, '123')
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
			
			alert('Данные успешно сохранены!')
			
			this.$emit('save');
		},
		addField() {
			// this.info.new = '123'
			// console.log(this.contactInfo)
			this.fields.push(Date.now())
			this.setContactInfo(this.id)
		},
		saveFieldInfo(data) {
			// добавить все объекты в data,
			if (data.key != '') {
				this.info[data.key] = data.value
			}
			// console.log(data)
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
	// margin: 0 auto;
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