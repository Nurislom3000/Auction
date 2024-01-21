import axios from 'axios'

export default {
	mounted(el, ID) {
		async function updateUserServer() {
			try {
				await axios
					.patch(
						`https://b1fc734675d7d28d.mokky.dev/users/${ID.value}`,
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
