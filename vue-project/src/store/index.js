import { createStore } from 'vuex'
import { productsModule } from '@/store/StoreModules/productsModule.js'
import { usersModule } from '@/store/StoreModules/usersModule.js'

export default createStore({
	modules: {
		productModule: productsModule,
		usersModule: usersModule,
	},
})
