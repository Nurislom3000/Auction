import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Products from '@/pages/Products.vue'
import SignUp from '@/pages/SignUp.vue'
import Registration from '@/pages/Registration.vue'
import Signed from '@/pages/subPages/Signed.vue'
import Info from '@/pages/Info.vue'
import Basket from '@/pages/Basket.vue'

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/products',
		component: Products,
	},
	{
		path: '/sign',
		component: SignUp,
	},
	{
		path: '/reg',
		component: Registration,
	},
	{
		path: '/signed',
		component: Signed,
	},
	{
		path: '/info',
		component: Info,
	},
	{
		path: '/basket',
		component: Basket,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
