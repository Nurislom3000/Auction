<template>
	<div class="all">
		<div class="basket">
			<BasketCard
				v-for="purchased in user.basket"
				:key="purchased.id"
				:purchased="purchased"
				@del="delProduct"
				@add="plus"
				@unAdd="minus"
			/>
		</div>
	</div>
</template>

<script>
import BasketCard from '@/components/BasketCard.vue'
import BasketMixin from '@/mixins/BasketMixin.js'

export default {
	mixins: [BasketMixin],

	data() {
		return {
			user: {},
		}
	},

	mounted() {
		this.userAdder()
	},
	components: { BasketCard },
}
</script>

<style scoped>
.all {
	display: flex;
	margin-left: 5%;
	margin-top: 2%;
}

.basket {
	width: 100%;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
}
</style>
