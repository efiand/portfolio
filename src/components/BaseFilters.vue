<template>
	<ul class="filters" v-if="filters.length">
		<li class="filter" v-for="({ title, url }, i) in filters" :key="`filter-${i}`">
			<RouterLink class="link" :to="url">{{ title }}</RouterLink>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'BaseFilters',

		props: {
			filters: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style scoped>
	.filters {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		list-style: none;
	}

	.filter {
		margin: 0.125rem;
	}

	.link {
		display: block;
		padding: 0.5rem 1rem;
		font-size: 0.8rem;
		text-decoration: none;
		color: var(--color-paper);
		background-color: var(--color-contrast);
		box-shadow: var(--shadow-rotated);

		&:hover,
		&:focus-visible,
		&.router-link-exact-active {
			color: var(--color-paper);
			background-image: var(--gradient-sky);

			&:not(:active) {
				opacity: 1;
			}
		}
	}
</style>
