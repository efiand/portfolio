<template>
	<article>
		<p class="date">{{ date }}</p>
		<h2>{{ number }}. {{ name }}</h2>

		<p class="description">{{ description }}</p>

		<div class="cards">
			<div class="card">
				<h3 class="title">Языки</h3>
				<ul class="links topics">
					<li v-for="language in languages" :key="language">
						<RouterLink class="link topic" :to="`/portfolio/${language.toLowerCase()}`">
							{{ language }}
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="card">
				<h3 class="title">Навыки</h3>
				<ul class="links topics">
					<li v-for="topic in topics" :key="topic">
						<RouterLink class="link topic" :to="`/portfolio/${topic.toLowerCase()}`">
							{{ topic }}
						</RouterLink>
					</li>
				</ul>
			</div>
		</div>

		<ul class="links footer">
			<li><a class="link" :href="url">Код на github</a></li>
			<li v-if="homepage"><a class="link" :href="homepage">Опубликованная версия</a></li>
		</ul>
	</article>
</template>

<script>
	export default {
		name: 'PorffolioProject',

		props: {
			number: {
				type: Number,
				required: true
			},

			project: {
				type: Object,
				required: true
			}
		},

		data() {
			return {
				...this.project
			};
		}
	};
</script>

<style scoped>
	.date {
		margin: 0 0 0.5rem;
		font-size: 0.8rem;
	}

	.description {
		display: table;
		margin-right: auto;
		margin-left: auto;
	}

	.cards {
		display: grid;
		gap: 1rem;

		@media (--laptop-desktop) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.card {
		padding: 1.5rem 2rem;
		background-color: var(--color-background);
		border-radius: 1rem;

		@media (--handheld) {
			padding: 1.5rem;
		}

		& .title {
			margin: 0 0 0.5rem;
			font-size: 1.25rem;
		}
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		margin: -0.5rem 0 0 -1rem;
		padding: 0;
		list-style: none;
	}

	.link {
		display: block;
		margin: 0.5rem 0 0 1rem;
	}

	.topic {
		font-size: 0.8rem;
	}

	.footer {
		margin-top: 0.5rem;
		justify-content: center;
	}
</style>
