import axios from 'axios'

export default {
	mounted(el, ID) {
		async function updateUserServer() {
			try {
				await axios
					.patch(
						`https://79aba9a04b69b6f8.mokky.dev/users/${ID.value}`,
						JSON.parse(localStorage.getItem('user'))
					)
					.then(response => {
						console.log(response.data)
					})
			} catch (error) {
				console.log(error)
			}
		}

		el.addEventListener('click', () => {
			updateUserServer()
		})
	},

	name: 'update-server',
}
