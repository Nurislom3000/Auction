<template>
	<Header />

	<div class="products">
		<div class="productList">
			<productCard
				v-for="product in products"
				:key="product.id"
				:product="product"
				:shower="this.shower"
			/>
		</div>
	</div>

	<Transition class="bought" name="bounce">
		<Toast v-if="show" />
	</Transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			show: false,
		}
	},
	computed: {
		...mapState({
			products: state => state.productModule.products,
		}),
	},
	methods: {
		...mapActions({
			getProducts: 'productModule/getProducts',
		}),
		shower() {
			this.show = true
			setTimeout(() => {
				this.show = false
			}, 1000)
		},
	},
	mounted() {
		this.getProducts()
	},
}
</script>

<style scoped>
.products {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 3%;
}
.productList {
	width: 100%;
	margin-top: 2%;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
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
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.bought {
	position: fixed;
	right: 40px;
	bottom: 40px;
	width: 14%;
}
</style>
