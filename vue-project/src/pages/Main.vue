<template>
	<Header />

	<div class="main">
		<div class="px-3 main_content">
			<h1>Welcome to <span>MainHat</span></h1>
			<p>
				MainHat is a simple and convenient online store. Being a
				multifunctional<br />
				Internet store, it retains the simplicity of the interface. You can
				<br />read more in the "Description" section.
			</p>

			<div class="button">
				<button
					v-if="user == undefined"
					@click="$router.push('/reg')"
					type="button"
					class="btn btn-light"
				>
					Login
				</button>

				<button
					v-else
					@click="$router.push('/products')"
					type="button"
					class="btn btn-light"
				>
					Store
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		user() {
			try {
				return JSON.parse(localStorage.getItem('user'))
			} catch (error) {
				return undefined
			}
		},
	},
}
</script>

<style scoped>
.main {
	width: 100vw;
	height: 88.7vh;
	background: #16181b;
	color: aliceblue;
	display: flex;
	align-items: center;
	justify-content: center;
}

.main_content {
	text-align: center;
}
.lead {
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
		Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-weight: 300;
	line-height: 30px;
	font-size: 20px;
	box-sizing: border-box;
}

span {
	color: goldenrod;
}

button {
	font-weight: bold;
}
</style>
