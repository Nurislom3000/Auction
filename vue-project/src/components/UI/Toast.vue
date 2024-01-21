<template>
	<div>
		<div style="z-index: 11">
			<div id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header">
					<strong class="me-auto">✅</strong>
					<span>You have bought It</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Toast',
}
</script>
