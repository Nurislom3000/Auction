import axios from 'axios'
import router from '@/router/router'

export const productsModule = {
	state: () => ({
		products: [],
	}),
	getters: {},
	mutations: {},
	actions: {
		async getProducts({ state }) {
			await axios
				.get('https://79aba9a04b69b6f8.mokky.dev/products')
				.then(response => {
					state.products = response.data
				})
		},

		async AddToCart({ state }, productID) {
			await axios
				.get('https://79aba9a04b69b6f8.mokky.dev/products')
				.then(response => {
					try {
						let user = JSON.parse(localStorage.getItem('user'))

						const soldProduct = response.data.find(sold => sold.id == productID)

						user.basket.push(soldProduct)
						localStorage.setItem('user', JSON.stringify(user))
					} catch (error) {
						router.push('/reg')
					}
				})
		},
	},

	namespaced: true,
}
