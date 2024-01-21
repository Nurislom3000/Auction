<template>
	<div @click.prevent.stop class="userInfo">
		<div class="user">
			<h1>{{ name }}</h1>
		</div>
		<div class="name">Name: {{ user.name }}</div>
		<div class="email">Email: {{ user.email }}</div>
		<div class="password">Password: {{ user.pass }}</div>
		<button @click="signOut" class="btn btn-danger">Sign out</button>
	</div>
</template>

<script>
export default {
	props: {
		name: [String],
	},

	methods: {
		signOut() {
			try {
				localStorage.removeItem('user')
				location.reload()
			} catch (error) {
				console.log(error)
				return undefined
			}
		},
	},

	computed: {
		user() {
			try {
				return JSON.parse(localStorage.getItem('user'))
			} catch (error) {
				console.log(error)
				return undefined
			}
		},
	},
}
</script>

<style scoped>
.user {
	border-radius: 100px;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: grey;
}

h1 {
	font-size: 45px;
	margin: 0 auto;
}

.userInfo {
	position: fixed;
	left: 35%;
	top: 20%;
	width: 30%;
	height: 60%;
	background: #212529;
	border-radius: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	padding: 4% 0 4% 0;
}
</style>
