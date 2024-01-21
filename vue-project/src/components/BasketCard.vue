<template>
	<div class="row card" style="width: 18rem">
		<img :src="purchased.imgURL" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ purchased.title }}</h5>
			<p class="card-text">
				${{ purchased.price * purchased.count }} => {{ purchased.count }} pieces
			</p>
			<span class="count">
				<button
					@click="$emit('unAdd', purchased.id)"
					href="#"
					class="href btn btn-primary"
				>
					-
				</button>
				<button
					@click="$emit('add', purchased.id)"
					href="#"
					class="href btn btn-primary"
				>
					+
				</button>
			</span>
			<button @click="$emit('del', purchased.id)" class="btn btn-danger">
				Delete
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		purchased: [Object],
	},

	mounted() {
		console.log(this.purchased.price)
	},
}
</script>

<style scoped>
.card {
	margin-bottom: 66px;
}

img {
	padding: 0;
	width: 100%;
	height: 73%;
}

.btn-danger {
	margin-left: 10%;
}

.href {
	border-radius: 0;
}

.card-body {
	height: 27%;
}
</style>
