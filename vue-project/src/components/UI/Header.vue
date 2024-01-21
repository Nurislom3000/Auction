<template>
	<header class="p-3 bg-dark text-white">
		<div class="container">
			<div
				class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
			>
				<router-link
					to="/"
					class="logo d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
				>
					<img
						class="logo"
						src="https://media.istockphoto.com/id/1324569030/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/m-%D0%B1%D1%83%D0%BA%D0%B2%D0%B0-%D0%BB%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B0-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0.jpg?s=612x612&w=0&k=20&c=MzBvib9oyaSt9MNA-9VvsJdVHRaLjmSvegf1TDLWzL0="
						alt="#"
					/>
				</router-link>

				<ul
					class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
				>
					<li>
						<router-link to="/" class="nav-link px-2 text-white"
							>Main</router-link
						>
					</li>
					<li>
						<router-link to="/products" class="nav-link px-2 text-white"
							>Products</router-link
						>
					</li>
					<li>
						<router-link to="/basket" class="nav-link px-2 text-white"
							>Basket</router-link
						>
					</li>
					<li>
						<router-link to="/" class="nav-link px-2 text-white"
							>FAQs</router-link
						>
					</li>
					<li>
						<router-link to="/info" class="nav-link px-2 text-white"
							>AboutUs</router-link
						>
					</li>
				</ul>

				<div class="account">
					<div v-if="isUser == false" class="text-end">
						<button
							@click="this.$router.push('/reg')"
							type="button"
							class="btn btn-outline-light me-2"
						>
							Login
						</button>
						<button
							@click="this.$router.push('/sign')"
							type="button"
							class="btn btn-warning"
						>
							Sign-up
						</button>
					</div>

					<button @click="show = !show" v-else class="btn user">
						<h1>{{ userName }}</h1>
					</button>

					<Transition name="bounce">
						<div @click="show = false" v-if="show" class="accountInfo">
							<AccountInfo :name="userName" />
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import AccountInfo from './AccountInfo.vue'

export default {
	name: 'Header',
	data() {
		return {
			show: false,
		}
	},

	computed: {
		userName() {
			try {
				return JSON.parse(localStorage.getItem('user'))
					.name.charAt(0)
					.toUpperCase()
			} catch (error) {
				return undefined
			}
		},
		isUser() {
			try {
				if (JSON.parse(localStorage.getItem('user')).basket != undefined) {
					return true
				}
			} catch (error) {
				return false
			}
		},
	},
	components: { AccountInfo },
}
</script>

<style scoped>
header {
	position: static;
	left: 0;
	top: 0;
	width: 100vw;
}

.logo {
	width: 50px;
	height: 50px;
	margin-right: 20px;
	border-radius: 10px;
}

.user {
	border-radius: 100px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: grey;
}

h1 {
	font-size: 30px;
	margin: 0 auto;
}

.accountInfo {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
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
</style>
