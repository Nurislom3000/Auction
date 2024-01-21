export default {
	methods: {
		userAdder() {
			try {
				this.user = JSON.parse(localStorage.getItem('user'))
				console.log(this.user)
			} catch (error) {
				this.user = undefined
				console.log(this.JSON.parse(localStorage.getItem('user')))
				console.error(error)
			}
		},
		delProduct(ID) {
			const delID = this.user.basket.findIndex(product => product.id == ID)
			this.user.basket.splice(delID, 1)
			localStorage.setItem('user', JSON.stringify(this.user))
			console.log(this.userExists)
		},
		plus(ID) {
			const plusID = this.user.basket.findIndex(product => product.id == ID)

			this.user.basket[plusID].count += 1
			localStorage.setItem('user', JSON.stringify(this.user))
		},
		minus(ID) {
			const minusID = this.user.basket.findIndex(product => product.id == ID)
			if (this.user.basket[minusID].count > 1) {
				this.user.basket[minusID].count--
				localStorage.setItem('user', JSON.stringify(this.user))
			} else {
				console.log(1)
			}
		},
	},
}
