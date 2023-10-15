<template>
	<div class="page centerer">
		<PageHeader :navLinks="navLinks" />

		<main class="main">
			<p v-if="error">Информация временно недоступна.</p>
			<p v-else-if="!appData">Получаем информацию из Github... Пожалуйста, подождите.</p>
			<slot v-else />
		</main>

		<PageFooter :navLinks="navLinks" />
	</div>
</template>

<script>
	import PageFooter from '@/components/PageFooter.vue';
	import PageHeader from '@/components/PageHeader.vue';

	export default {
		name: 'PageLayout',

		components: {
			PageHeader,
			PageFooter
		},

		props: {
			appData: {
				type: Object,
				default: null
			},
			error: {
				type: Error,
				default: null
			},
			navLinks: {
				type: Array,
				default: () => []
			}
		}
	};
</script>

<style scoped>
	.page {
		margin-top: 1rem;
		margin-bottom: 1rem;

		@media (--tablet-laptop-desktop) {
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
	}

	.main {
		position: relative;
		z-index: 1;
		padding: 3rem;
		background-color: var(--color-paper);
		border-radius: 3.5rem;
		box-shadow: var(--shadow-base);

		@media (--handheld) {
			padding: 2.5rem 1.5rem;
			border-radius: 2rem;
		}

		@media (--tablet-laptop-desktop) {
			padding: 4rem;
			border-radius: 5rem;
		}
	}

	p {
		text-align: center;
	}
</style>
