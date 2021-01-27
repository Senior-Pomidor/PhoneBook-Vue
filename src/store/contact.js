import { contacts } from './model.js'

export default {
	state: {
		contacts: [],
		contact: {}
	},
	mutations: {
		updateContacts(state, contacts) {
			state.contacts = contacts
		},
		createContact(state, newContact) {
			state.contacts.push(newContact)
		},
		setContactInfo(state, id) {
			// будем получать контакт целиком и устанавливать значения в массив и в contact
			let allContacts = state.contacts
			// console.log(allContacts.find(contact => contact.id === id), '123')
		// для очистки contact в store
			state.contact = id ? allContacts.find(contact => contact.id === id) : {}
		},
		updateContact(state, info) {
			state.contact = info
			let index = state.contacts.findIndex(contact => contact.id === info.id)
			state.contacts[index] = info
		},
		removeContact(state, id) {
			let index = state.contacts.findIndex(contact => contact.id === id)
			contacts.splice(index, 1)
		},
		removeField(state, field) {
			// находим индекс контакта у которого совпадают имя поля и значение
			let index = state.contacts.findIndex(contact => contact[field[0]] === field[1])
			// удаляем поле у этого контакта
			delete contacts[index][field[0]]
		}
	},
	actions: {
		async fetchContacts({commit}) {
			// имитация получения данных с бэкенда
			let model =  await import('./model.js');
			let contacts = await model.contacts
			commit('updateContacts', contacts)
		},
		changeContact({commit}, info) {
			commit('updateContact', info)
		},
		// async updateContactInfo({commit, dispatch}, id) {
		// 	await dispatch('fetchContacts')
		// 	commit('setContactInfo', id)
		// },
		removeContact({commit}, id) {
			commit('removeContact', id)
		},
		removeField({commit}, field) {
			commit('removeField', field)
		}
	},
	getters: {
		allContacts: state => state.contacts,
		contact: state => state.contact
	}
}