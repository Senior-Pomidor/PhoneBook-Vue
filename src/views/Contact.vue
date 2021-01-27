<template>
	<div id="contact">
		<form class="add-contact__form form-add" id="contact-form-add" @submit.prevent="updateInfo()">
			<div class="form-add__input-field">
				<a class="remove" @click.prevent="remove()"></a>
			</div>
			<div class="form-add__input-field" 
				v-for="key in Object.keys(contactInfo)"
				:key="key"
				v-show="key !== 'id'"
			>
				<input class="form-add__input" type="text" :placeholder="key"
					:disabled="disabled.indexOf(key) !== -1 ? true : false"
					:value="key"
				>
				<span class="separator">:</span>
				<input class="form-add__input" type="text" v-model="info[key]"
					:disabled="key === 'id'? true : false"
				>
				<a class="remove remove--field" @click.prevent="removeInfoField"
					v-show="disabled.indexOf(key) !== -1 ? false : true"
				></a>
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
		this.setContact(this.id)
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
		...mapActions(['setContact', 'changeContact', 'removeContact', 'removeField']),
		updateInfo() {
			this.info.id = this.id
			this.changeContact(this.info)

			// console.log(this.fields)
			// console.log(this.info)

			// let fields = document.querySelectorAll('.form-add__input-field')

			
			
			alert('Данные успешно сохранены!')
			
			this.$emit('save');
		},
		addField() {
			// this.info.new = '123'
			// console.log(this.contactInfo)
			this.fields.push(Date.now())
			this.setContact(this.id)
		},
		saveFieldInfo(data) {
			// добавить все объекты в data,
			if (data.key != '') {
				this.info[data.key] = data.value
			}
			// console.log(data)
		},
		remove() {
			this.removeContact(this.id)
			alert('Контакт успешно удалён.')
			this.$router.push('/')
		},
		removeInfoField() {
			const remove = (evt) => {
				// получаем ключ и значение удаляемого поля
				let inputs = evt.target.parentNode.querySelectorAll('input')
				let key = inputs[0].value
				let value = inputs[1].value
				let field = [key, value]

				// удаляем поле со страницы и из store
				this.removeField(field)
				evt.target.parentNode.remove()

				// удаляем обработчик чтобы он не срабатывал после выполнения функции
				document.removeEventListener('click', remove)
			}

			document.addEventListener('click', remove)
			alert('Запись успешно удалена!')
		}
	},
	beforeDestroy() {
		// для очистки contact в store
		this.setContact()
	}
}
</script>

<style lang="scss" scoped>
$remove-color: #a6a9b8;
$alert-color: #f00;

#contact {
	border-radius: 2px;
	// margin: 0 auto;
}

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
		.remove--field {
			margin-left: auto;
			margin-top: 0.5em;
		}
	}
}
</style>