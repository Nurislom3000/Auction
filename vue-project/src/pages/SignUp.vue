<template>
	<Header />
	<Form :showName="true" :formFunction="'checkUser'" />
</template>

<script>
import Form from '@/components/Form.vue'
export default {
	components: { Form },
}
</script>
