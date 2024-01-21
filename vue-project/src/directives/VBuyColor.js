export default {
	mounted(el) {
		el.addEventListener('click', () => {
			el.style.backgroundColor = 'green'

			setTimeout(() => {
				el.style.backgroundColor = '#0d6efd'
			}, 1000)
		})
	},

	name: 'change-color',
}
