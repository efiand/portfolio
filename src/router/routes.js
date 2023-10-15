export default [
	{
		meta: {
			hidden: true,
			layout: 'PromoLayout',
			title: 'Добро пожаловать!'
		},
		name: 'index',
		path: '/'
	},
	{
		meta: {
			title: 'Портфолио'
		},
		name: 'portfolio',
		path: '/portfolio'
	},
	{
		component: 'portfolio',
		meta: {
			hidden: true,
			title: 'Портфолио'
		},
		name: 'topic',
		path: '/portfolio/:topic'
	},
	{
		meta: {
			title: 'Обо мне'
		},
		name: 'about',
		path: '/about'
	},
	{
		meta: {
			hidden: true,
			layout: 'PromoLayout',
			title: 'Not found'
		},
		name: 'error',
		path: '*'
	}
];
