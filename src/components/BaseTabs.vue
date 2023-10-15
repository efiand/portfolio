<template>
	<ul class="tabs" :class="{ promo }" v-if="links.length">
		<li class="tab" v-for="({ href, title, external = href.includes('//') }, i) in links" :key="`tab-${i}`">
			<a v-if="external" class="link" :class="{ bottom }" :href="href">{{ title }}</a>
			<RouterLink class="link" v-else :class="{ bottom }" :to="href">{{ title }}</RouterLink>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'BaseTabs',

		props: {
			links: {
				type: Array,
				required: true
			},

			bottom: {
				type: Boolean,
				default: false
			},

			promo: {
				type: Boolean,
				default: false
			}
		}
	};
</script>

<style scoped>
	.tabs {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto;
		padding: 0;
		list-style: none;

		&.promo {
			justify-content: space-between;
		}
	}

	.tab {
		margin: 0 0.125rem;
	}

	.link {
		position: relative;
		display: block;
		padding: 1rem 2rem;
		font-weight: 500;
		text-decoration: none;
		color: var(--color-paper);
		background-color: var(--color-contrast);
		border-radius: 1rem 1rem 0 0;
		outline-color: var(--color-paper);
		outline-offset: 0.25rem;
		box-shadow: var(--shadow-rotated);

		@media (--handheld) {
			padding-right: 1.25rem;
			padding-left: 1.25rem;
		}

		&:hover,
		&:focus-visible {
			&:not(.router-link-exact-active) {
				color: var(--color-paper);
				background-image: var(--gradient-sky);
			}

			&:not(:active) {
				z-index: 1;
				opacity: 1;
			}
		}

		&.bottom {
			border-radius: 0 0 1rem 1rem;
		}

		&.router-link-active,
		&.router-link-exact-active {
			color: var(--color-accent);
			background-color: var(--color-paper);
			background-image: none;
		}

		&.router-link-exact-active {
			z-index: 1;
		}
	}
</style>
