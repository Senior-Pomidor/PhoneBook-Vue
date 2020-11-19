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
		updateContactInfo(state, id) {
			// будем получать контакт целиком и устанавливать значения в массив и в contact
			let allContacts = state.contacts
		// для очистки contact в store
			state.contact = id ? allContacts.find(contact => contact.id === id) : {}
		},
		// updateContactInfo(state, data) {
		// 	state.contacts[data.index][data.key] = data.value
		// }
	},
	actions: {
		async fetchContacts({commit}) {
			// имитация получения данных с бэкенда
			let model =  await import('./model.js');
			let contacts = await model.contacts
			commit('updateContacts', contacts)
		},
		// updateContacts({commit}, info) {
		// 	commit('createContact', info)
		// },
		// updateContactInfo({commit}, data) {
		// 	commit('updateContactInfo', data)
		// }
	},
	getters: {
		allContacts: state => state.contacts,
		contact: state => state.contact
	}
}