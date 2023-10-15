<template>
	<body>
		<Component :is="layout" :navLinks="navLinks" :appData="appData" :appear="appear" :error="error">
			<RouterView :appData="appData" @appear="appear = true" />
		</Component>
	</body>
</template>

<script>
	import '@/assets/css/fonts.css';
	import '@/assets/css/global.css';
	import '@/assets/css/helpers.css';
	import '@/assets/css/keyframes.css';
	import { mapState } from 'vuex';
	import routes from '@/router/routes';

	export default {
		name: 'App',

		data() {
			return {
				appear: false
			};
		},

		computed: {
			...mapState(['appData', 'error']),

			layout() {
				const layout = this.$route.meta.layout || 'PageLayout';
				return () => import(`@/layouts/${layout}.vue`);
			},

			navLinks() {
				return routes
					.filter(({ meta }) => !meta.hidden)
					.map(({ path, meta: { title } }) => ({
						href: path,
						title
					}));
			}
		},

		beforeCreate() {
			this.$store.dispatch('getData');
		},

		watch: {
			$route() {
				const { redirect = null } = this.$route.query;
				if (redirect) {
					this.$router.push(redirect);
				}

				document.title = `efiand : ${this.$route.meta.title}`;
			}
		}
	};
</script>
