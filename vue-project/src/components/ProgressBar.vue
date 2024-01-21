<template>
	<div>
		<button
			@click="
				$store.dispatch('productModule/AddToCart', productID),
					shower(),
					startProgress(),
					(isDisabled = true)
			"
			:disabled="isDisabled"
		>
			<div class="progress-bar-container bg-primary">
				<div class="progress-bar" :style="{ width: progress + '%' }"></div>
				<span>Add</span>
			</div>
		</button>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	props: {
		productID: [Number],
		shower: [Function],
	},

	setup() {
		const progress = ref(0)
		let interval
		let isDisabled = ref(false)

		function startProgress() {
			clearInterval(interval)
			progress.value = 0
			interval = setInterval(() => {
				progress.value += 50

				if (progress.value >= 100) {
					clearInterval(interval)
					setTimeout(() => {
						isDisabled.value = !isDisabled

						progress.value = 0
					}, 1000) // Ждем 1 секунду перед началом нового прогресса
				}
			}, 1000)
		}

		return {
			progress,
			startProgress,
			isDisabled,
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
