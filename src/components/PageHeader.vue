<template>
	<header class="centerer">
		<nav>
			<BaseTabs :links="navLinks" :promo="promo" />
		</nav>
	</header>
</template>

<script>
	import BaseTabs from '@/components/BaseTabs.vue';

	export default {
		name: 'PageHeader',

		components: { BaseTabs },

		props: {
			navLinks: {
				type: Array,
				default: () => []
			},

			promo: {
				type: Boolean,
				default: false
			}
		}
	};
</script>
