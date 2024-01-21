import { onMounted, ref } from 'vue'

export function locator() {
	const position = ref(null)

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				({ coords }) => {
					position.value = {
						latitude: coords.latitude,
						longitude: coords.longitude,
					}
				},
				error => {
					console.error(error)
				}
			)
		} else {
			console.error('Ваш браузер не поддерживает геолокацию.')
		}
	}

	onMounted(getLocation)
	console.log(position)

	return {
		position,
		getLocation,
	}
}
