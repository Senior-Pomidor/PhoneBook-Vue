// import { from } from 'core-js/fn/array'
// import { contacts } from './model.js'

export default {
	state: {
		// contacts: [
		// 	{
		// 		id: '1',
		// 		name: 'Dow John',
		// 		phone: '+7 999 228 14 88',
		// 		email: 'dowjohn@gmail.com'
		// 	}, {
		// 		id: '2',
		// 		name: 'Dow John 2',
		// 		phone: '+7 999 228 14 88',
		// 		email: 'dowjohn@gmail.com'
		// 	}, {
		// 		id: '3',
		// 		name: 'Dow John 3',
		// 		phone: '+7 999 228 14 88',
		// 		email: 'dowjohn@gmail.com'
		// 	}
		// ],
		contacts: []
		// contactId: ''
	},
	mutations: {
		updateContacts(state, contacts) {
			state.contacts = contacts
		},
		addContact(state, contact) {
			state.contacts.push(contact)
		},
		updateContactInfo(state, data) {
			state.contacts[data.index][data.key] = data.value
		}
	},
	actions: {
		async fetchContacts({commit}) {
			// имитация получения данных с бэкенда
			let model =  await import('./model.js');
			let contacts = await model.contacts
			commit('updateContacts', contacts)
		},
		updateContacts({commit}, info) {
			commit('addContact', info)
		},
		updateContactInfo({commit}, data) {
			commit('updateContactInfo', data)
		}
	},
	getters: {
		allContacts: state => state.contacts
	}
}