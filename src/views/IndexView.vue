<template>
	<main>
		<SectionWelcome @appear="$emit('appear')">
			Привет. Меня зовут Андрей. Я вкладываю душу в сайты…
			<template v-slot:defer>и&nbsp;они оживают!</template>
		</SectionWelcome>
	</main>
</template>

<script>
	import SectionWelcome from '@/components/SectionWelcome.vue';
	export default {
		name: 'IndexView',

		components: { SectionWelcome },

		props: {
			appData: {
				type: Object,
				default: null
			}
		}
	};
</script>
