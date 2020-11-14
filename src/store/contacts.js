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
		]
	},
	mutations: {
		addContact(state, contact) {
			state.contacts.push(contact)
		}
	},
	actions: {
		updateContacts({commit}, info) {
			commit('addContact', info)
		}
	},
	getters: {
		contacts: state => state.contacts
	}
}