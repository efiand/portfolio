<template>
	<div class="promo">
		<PageHeader class="header" :class="{ appear }" :navLinks="navLinks" promo />

		<slot />
	</div>
</template>

<script>
	import PageHeader from '@/components/PageHeader.vue';

	export default {
		name: 'PromoLayout',

		components: {
			PageHeader
		},

		props: {
			appear: {
				type: Boolean,
				default: false
			},

			navLinks: {
				type: Array,
				default: () => []
			}
		}
	};
</script>

<style scoped>
	.promo {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
	}

	.header {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		transform: translateY(100%);

		&.appear {
			bottom: 0;
			transform: translateY(0);
			transition: transform 0.6s 4s ease-in-out;
		}
	}
</style>
