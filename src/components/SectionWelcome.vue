<template>
	<section class="welcome">
		<h1 class="heading" :class="{ showed }">{{ heading }}</h1>

		<p class="lead centerer" :class="{ showed }">
			<slot />
			<span class="continue">
				<slot name="defer" />
			</span>
		</p>

		<img class="img" :class="{ showed }" src="/img/ava.svg" width="429" height="392" :alt="alt" />
	</section>
</template>

<script>
	import { wait } from '@/common/helpers';

	const WAITING = 200;

	export default {
		name: 'SectionWelcome',

		props: {
			customText: {
				type: String,
				default: ''
			}
		},

		data() {
			return {
				alt: 'Аватар разработчика, изготовленный из кругов и овалов.',
				heading: 'Сайт веб-разработчика Андрея Ефимова',
				showed: false
			};
		},

		async mounted() {
			await wait(WAITING);

			this.showed = true;
			this.$emit('appear');
		}
	};
</script>

<style scoped>
	.welcome {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		min-height: 100vh;
		padding: 2rem 1rem 0;
		overflow: hidden;
		text-align: center;

		& :deep(a) {
			font-weight: inherit;
		}
	}

	.heading {
		margin: 0 0 3rem;
		font-weight: 400;
		font-size: 1.5rem;
		color: var(--color-paper);
		transform: translateY(-200%);
		opacity: 0;

		&.showed {
			transform: translateY(0);
			opacity: 1;
			transition: transform 0.6s 3s ease-in-out, opacity 0.6s 3s ease-in-out;
		}
	}

	.lead {
		position: relative;
		margin: auto 0 2rem;
		padding: 3rem 4rem;
		font-size: 1.75rem;
		background-color: var(--color-paper);
		border-radius: 5rem;
		box-shadow: var(--shadow-base);
		transform: translateY(20px) scale(0);
		transform-origin: center bottom;

		@media (--handheld) {
			padding: 2.25rem 2.5rem;
			font-size: 1.5rem;
		}

		&.showed {
			transform: translateY(0) scale(1);
			transition: transform 0.6s 0.6s ease-in-out;
		}

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			width: 2rem;
			height: 2rem;
			background-color: inherit;
			box-shadow: var(--shadow-rotated);
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}

	.continue {
		display: block;
		font-size: 0;
		animation: textGrow 1.2s 1.8s ease-in-out forwards;
	}

	.img {
		opacity: 0;

		&.showed {
			animation: jump 0.6s ease-in-out forwards;
		}
	}
</style>
