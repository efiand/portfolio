<template>
	<article class="content">
		<slot />
	</article>
</template>

<script>
	export default {
		name: 'BaseContent',

		props: {
			html: {
				type: String,
				default: ''
			}
		}
	};
</script>

<style scoped>
	.content {
		hyphens: auto;
	}

	.content :deep {
		&(h1:not([class])) {
			position: absolute;
			clip: rect(0, 0, 0, 0);
		}

		&(h1),
		&(h2) {
			clear: both;
			margin: 2rem 0 1.5rem;
			font-weight: 600;
			font-size: 2rem;
			text-align: center;

			&:first-of-type {
				margin-top: 0;
			}

			& + h3 {
				margin-top: 0;
			}
		}

		&(h3) {
			margin: 2rem 0 1rem;
			font-weight: 500;
			font-size: 1.5rem;
		}

		&(p:not([class])) {
			margin: 1rem 0;

			&:first-of-type img {
				@media (--laptop-desktop) {
					float: left;
					margin: 0 2rem 2rem 0;
				}
			}
		}

		&(ul:not([class])) {
			margin: 1rem 0;
			padding-left: 2rem;
		}

		&(img) {
			border-radius: 3rem;
		}
	}
</style>
