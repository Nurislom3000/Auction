import axios from 'axios'
import router from '@/router/router'

export const productsModule = {
	state: () => ({
		products: [],
	}),
	getters: {},
	mutations: {},
	actions: {
		async getProducts({ state, commit }) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/products')
				.then(response => {
					state.products = response.data
				})
		},

		async AddToCart({ state }, productID) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/products')
				.then(response => {
					try {
						let user = JSON.parse(localStorage.getItem('user'))

						const soldProduct = response.data.find(sold => sold.id == productID)
						const hasProduct = user.basket.findIndex(
							product => product.id == soldProduct.id
						)

						if (hasProduct != -1) {
							user.basket[hasProduct].count++
							localStorage.setItem('user', JSON.stringify(user))
						} else {
							soldProduct.count++
							user.basket.push(soldProduct)
							localStorage.setItem('user', JSON.stringify(user))
						}
					} catch (error) {
						router.push('/reg')
					}
				})
		},
	},

	namespaced: true,
}
