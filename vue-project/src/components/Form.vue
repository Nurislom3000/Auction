<template>
	<form @submit.prevent.stop>
		<div v-if="showName" class="mb-3">
			<label class="form-label">Name</label>
			<input @input="nameUpdate" type="text" class="form-control" />
		</div>
		<div class="mb-3">
			<label class="form-label">Email address</label>
			<input @input="emailUpdate" type="email" class="form-control" />
			<div id="emailHelp" class="form-text">
				We'll never share your email with anyone else.
			</div>
		</div>
		<div class="mb-3">
			<label class="form-label">Password</label>
			<input @input="passwordUpdate" type="password" class="form-control" />
		</div>

		<button
			@click="this.$store.dispatch(`${formFunction}`, this.$router)"
			type="submit"
			class="btn btn-primary"
		>
			Submit
		</button>
		<br />
		<slot />
	</form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	props: {
		formFunction: [String],
		showName: [Boolean],
	},

	methods: {
		...mapMutations({
			updateEmail: 'updateEmail',
			updatePassword: 'updatePassword',
			updateName: 'updateName',
		}),

		emailUpdate(event) {
			this.updateEmail(event.target.value)
		},
		passwordUpdate(event) {
			this.updatePassword(event.target.value)
		},
		nameUpdate(event) {
			this.updateName(event.target.value)
		},
	},
}
</script>

<style scoped>
form {
	margin-top: 8%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
