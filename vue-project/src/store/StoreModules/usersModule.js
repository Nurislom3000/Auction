import axios from 'axios'

export const usersModule = {
	state: {
		user: {
			name: '',
			email: '',
			pass: '',
			basket: [],
		},
	},

	mutations: {
		updateEmail(state, newVal) {
			state.user.email = newVal
		},
		updatePassword(state, newVal) {
			state.user.pass = newVal
		},
		updateName(state, newVal) {
			state.user.name = newVal
		},
	},

	actions: {
		async sendUser({ state }) {
			await axios
				.post('https://b1fc734675d7d28d.mokky.dev/users', state.user)
				.then(response => {
					state.user.id = response.data.id
					localStorage.setItem('user', JSON.stringify(state.user))
				})
		},

		async checkUser({ state, dispatch }, router) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/users')
				.then(response => {
					const hasUser = response.data.some(
						user => user.email == state.user.email
					)

					function isValidEmail(email) {
						let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

						return emailRegex.test(email)
					}

					if (
						isValidEmail(state.user.email) &&
						state.user.pass.length >= 3 &&
						state.user.name.length >= 3
					) {
						dispatch('sendUser')
						router.push('/signed')
					} else if (state.user.email == '' || state.user.pass == '') {
						alert('Please write your email and password')
					} else if (hasUser == true) {
						alert('This email has been already used. Enter another email')
					} else {
						alert('Incorrect email or Password')
					}
				})
		},

		async getUsers({ state }, router) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/users')
				.then(response => {
					const hasUser = response.data.find(
						user =>
							user.pass == state.user.pass && user.email == state.user.email
					)

					if (hasUser != undefined) {
						state.user = hasUser
						state.user.basket = []
						router.push('/signed')
						localStorage.setItem('user', JSON.stringify(state.user))
						console.log(hasUser)
					} else {
						alert('Incorrect email or password')
					}
				})
		},
	},
}
