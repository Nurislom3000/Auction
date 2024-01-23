<template>
	<div>
		<button
			@click="startProgress(), (isDisabled = true)"
			:disabled="isDisabled"
		>
			<div
				:class="{
					'bg-secondary': grey,
				}"
				class="progress-bar-container bg-primary"
			>
				<div class="progress-bar" :style="{ width: progress + '%' }"></div>
				<span>Add</span>
			</div>
		</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
	props: {
		productID: [Number],
		shower: [Function],
	},

	setup(props) {
		const store = useStore()
		const progress = ref(0)
		let interval
		let isDisabled = ref(false)
		let grey = ref(false)

		async function byProduct() {
			await axios.patch(
				`https://79aba9a04b69b6f8.mokky.dev/products/${props.productID}`,
				{
					isSelled: true,
				}
			)
		}

		function startProgress() {
			grey.value = true
			clearInterval(interval)
			progress.value = 0
			interval = setInterval(() => {
				progress.value += 50

				if (progress.value >= 100) {
					clearInterval(interval)
					setTimeout(() => {
						// isDisabled.value = !isDisabled
						// grey.value = false
						store.dispatch('productModule/AddToCart', props.productID)
						props.shower()
						// progress.value = 0
						byProduct()
					}, 1000) // Ждем 1 секунду перед началом нового прогресса
				}
			}, 1000)
		}

		return {
			progress,
			startProgress,
			isDisabled,
			grey,
			byProduct,
		}
	},
}
</script>

<style scoped>
button {
	border: none;
	background: transparent;
}

span {
	position: absolute;
	margin-left: 12%;
	margin-top: 1%;
	color: #fcfcfc;
}

.progress-bar-container {
	width: 100px;
	height: 30px;

	border-radius: 5px;
	display: flex;
}

.progress-bar {
	height: 100%;
	background-color: #0cf7ff;

	border-radius: 4px;
}
</style>
