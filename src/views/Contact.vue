<template>
	<section id="contact" class="section--contact">
		<a class="icon" @click.prevent="back()">
			<div class="arrow"></div>
		</a>
		<h1>{{ info.name }}</h1>
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
				<button class="plus-btn" @click.prevent="addField()"></button>
				<button class="form-add__btn form-add__btn--submit" type="submit">Save info</button>
			</div>
		</form>
	</section>
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
			fields: [],
			emptyFieldsCount: 0
		}
	},
	mounted() {
		this.setContact(this.id)

		setTimeout(() => {
			// задержка чтобы данные успели прогрузиться из store
			// в store тоже задержка
			this.info = this.contactInfo
		}, 0)
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
			let fields = Array.from(document.querySelectorAll('.form-add__input-field'))
			let empty = fields.find(field => {
				if(field.querySelector('input')) {
					return field.querySelector('input').value == ""
				}
			})
			
			if (empty) {
				alert('Заполните или удалите пустые поля!')
			} else {
				this.info.id = this.id
				
				this.changeContact(this.info)
				this.$emit('save');

				alert('Данные успешно сохранены!')
			}	
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
		},
		back() {
			this.$router.push('/')
		}
	},
	beforeDestroy() {
		// для очистки contact в store
		this.setContact()
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

#contact {
	// border-radius: 2px;
	// margin: 0 auto;
}

.section--contact {
	position: relative;
	padding: 20px 0;
}

.icon {
	display: block;
  position: absolute;
  top: 2.2em;
  width: 30px;
  height: 20px;
  cursor: pointer;
  transform: rotate(180deg);
	transition: transform .4s;

	&:hover {
		transform: rotate(180deg) translateX(-10px);
	}

	&:active {
		.arrow {
			background-color: $primary-color-active;

			&::before, &::after {
				background-color: $primary-color-active;
			}
		}
	}
}

.arrow {
  width: 90%;
  height: 2px;
  background-color: $primary-color;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);

	&::after, &::before {
		content: '';
		position: absolute;
		width: 53%;
		height: 2px;
		right: 0px;
		background-color: $primary-color;
	}

	&::after {
		top: -5px;
		transform: rotate(45deg);
	}

	&::before {
		top: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
  transform: rotate(-45deg);
	}

	
}

.plus-btn {
	--color: #2f9e59;

  height:35px;
  width: 35px;
  padding:7px;
  box-sizing:border-box;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
  background:
    linear-gradient(#fff, rgb(255, 255, 255)) content-box,
    linear-gradient(#fff, #fff) content-box,
    var(--color);
  background-position:center;
  background-size: 100% 2px, 2px 100%;
  background-repeat:no-repeat;
	border: none;
	border-radius: 50%;
	outline: none;

	&:hover {
		--color:  #118d40;
	}

	&:active {
		--color:  #55d486;
	}
}

.form-add__btn--submit {
  box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
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