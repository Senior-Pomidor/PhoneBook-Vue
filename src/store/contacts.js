export default {
	state: {
		contacts: [
			{
				id: '1',
				name: 'Dow John',
				phone: '+7 999 228 14 88',
				email: 'dowjohn@gmail.com'
			}, {
				id: '2',
				name: 'Dow John 2',
				phone: '+7 999 228 14 88',
				email: 'dowjohn@gmail.com'
			}, {
				id: '3',
				name: 'Dow John 3',
				phone: '+7 999 228 14 88',
				email: 'dowjohn@gmail.com'
			}
		],
		// contactId: ''
	},
	mutations: {
		addContact(state, contact) {
			state.contacts.push(contact)
		},
		updateContactInfo(state, data) {
			state.contacts[data.index][data.key] = data.value
		}
	},
	actions: {
		updateContacts({commit}, info) {
			commit('addContact', info)
		},
		updateContactInfo({commit}, data) {
			commit('updateInfo', data)
		}
	},
	getters: {
		contacts: state => state.contacts
	}
}