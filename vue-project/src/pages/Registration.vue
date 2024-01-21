<template>
	<div class="reg">
		<Header />
		<br />
		<Form :showName="false" :formFunction="'getUsers'"
			><router-link to="/sign">or create an account</router-link></Form
		>
	</div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
	components: { Form },
}
</script>

<style scoped>
.reg {
	background: #353535;
	height: 100vh;
	color: white;
}
</style>
