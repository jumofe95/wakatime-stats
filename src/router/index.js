import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/ranking.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('@/views/profile.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
