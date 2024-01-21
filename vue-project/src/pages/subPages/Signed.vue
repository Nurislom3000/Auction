<template>
	<Header />
	<div>
		<div class="px-4 py-5 my-5 text-center">
			<img
				class="d-block mx-auto mb-4"
				src="https://media.istockphoto.com/id/1324569030/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/m-%D0%B1%D1%83%D0%BA%D0%B2%D0%B0-%D0%BB%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B0-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0.jpg?s=612x612&w=0&k=20&c=MzBvib9oyaSt9MNA-9VvsJdVHRaLjmSvegf1TDLWzL0="
				alt=""
				width="72"
				height="57"
			/>
			<h1 class="display-5 fw-bold">You have already Signed In</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4">
					Quickly design and customize responsive mobile-first sites with
					Bootstrap, the world’s most popular front-end open source toolkit,
					featuring Sass variables and mixins, responsive grid system, extensive
					prebuilt components, and powerful JavaScript plugins.
				</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button
						@click="$router.push('/products')"
						type="button"
						class="btn btn-primary btn-lg px-4 gap-3"
					>
						OK i accept
					</button>
					<button
						@click="$router.push('/info')"
						type="button"
						class="btn btn-outline-secondary btn-lg px-4"
					>
						Read some info
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
	width: 7%;
	height: 7%;
	border-radius: 10px;
}
</style>
