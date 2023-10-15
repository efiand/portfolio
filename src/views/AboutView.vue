<template>
	<BaseContent>
		<div class="about" v-html="appData.about" />
	</BaseContent>
</template>

<script>
	import BaseContent from '@/components/BaseContent.vue';

	export default {
		name: 'AboutView',

		components: {
			BaseContent
		},

		props: {
			appData: {
				type: Object,
				default: null
			}
		}
	};
</script>
