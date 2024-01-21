<template>
	<div>
		<button
			@click="marckShow"
			v-update-server="user.id"
			class="buy btn btn-secondary"
		>
			Pay
		</button>

		<Transition name="bounce">
			<div v-if="show" class="checkMarc" style="text-align: center">
				<img
					src="https://api.icons8.com/download/f0810b7548fdebcc248b69167c896c2da1ebdac7/Color/PNG/512/Very_Basic/ok-512.png"
				/>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import { ref } from 'vue'

let show = ref(false)
let user = JSON.parse(localStorage.getItem('user'))

function marckShow() {
	show.value = true
	setTimeout(() => {
		show.value = false
		user.basket = []
		localStorage.setItem('user', JSON.stringify(user))
	}, 1000)

	setTimeout(() => {
		location.reload()
	}, 1380)
}
</script>

<style scoped>
.buy {
	position: fixed;
	right: 10px;
	bottom: 10px;
	width: 5%;
	background: #212529;
}

.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}

.checkMarc {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 11;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	width: 19%;
	height: 40%;
}
</style>
