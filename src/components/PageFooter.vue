<template>
	<footer class="centerer">
		<BaseTabs :links="navLinks" bottom />
	</footer>
</template>

<script>
	import BaseTabs from '@/components/BaseTabs.vue';

	export default {
		name: 'PageFooter',

		components: { BaseTabs },

		props: {
			navLinks: {
				type: Array,
				default: () => []
			}
		}
	};
</script>
