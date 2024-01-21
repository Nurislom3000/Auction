<template>
	<div class="card" style="width: 18rem">
		<img :src="product.imgURL" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>
			<p class="card-text">${{ product.price }}</p>

			<ProgressBar :productID="product.id" :shower="shower" />
		</div>
	</div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
export default {
	name: 'productCard',

	props: {
		product: [Object],
		shower: [Function],
	},
	components: { ProgressBar },
}
</script>

<style scoped>
.card {
	margin: 10px;
	margin-bottom: 66px;
}

img {
	width: 100%;
	height: 80%;
}
</style>
