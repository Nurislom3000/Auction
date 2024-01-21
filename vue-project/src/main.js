import './assets/main.css'

import directives from '@/directives'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import UI from '@/components/UI'
import store from '@/store/index.js'

const app = createApp(App)
app.use(store).use(router).mount('#app')

directives.forEach(directive => {
	app.directive(directive.name, directive)
})

UI.forEach(component => {
	app.component(component.name, component)
})
