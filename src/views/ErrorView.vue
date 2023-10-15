<template>
	<main>
		<SectionWelcome @appear="$emit('appear')">
			Страница не найдена.
			<template v-slot:defer>Перейдите к <RouterLink to="/portfolio">началу просмотра</RouterLink></template>
		</SectionWelcome>
	</main>
</template>

<script>
	import SectionWelcome from '@/components/SectionWelcome.vue';
	export default {
		name: 'ErrorView',

		components: { SectionWelcome },

		props: {
			appData: {
				type: Object,
				default: null
			}
		}
	};
</script>
