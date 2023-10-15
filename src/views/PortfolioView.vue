<template>
	<BaseContent>
		<h1 class="title">{{ $route.meta.title }}</h1>

		<template v-if="appData.skills">
			<BaseFilters :filters="filters" />

			<ul class="projects">
				<li class="item" v-for="(project, i) in projects" :key="project.name">
					<PortfolioProject :project="project" :number="projects.length - i" />
				</li>
			</ul>

			<BaseFilters class="bottom" v-if="projects.length > 2" :filters="filters" />
		</template>
	</BaseContent>
</template>

<script>
	import BaseContent from '@/components/BaseContent.vue';
	import BaseFilters from '@/components/BaseFilters.vue';
	import PortfolioProject from '@/components/PortfolioProject.vue';

	const mapTitle = (title) => ({
		title,
		url: `/portfolio/${title.toString().toLowerCase()}`
	});

	export default {
		name: 'PorffolioView',

		components: {
			BaseContent,
			BaseFilters,
			PortfolioProject
		},

		props: {
			appData: {
				type: Object,
				default: null
			}
		},

		computed: {
			projects() {
				const { topic = null } = this.$route.params;

				if (topic) {
					return this.appData.repositories.filter(({ langTags, topics, year }) => {
						return topic === year.toString() || langTags.includes(topic) || topics.includes(topic);
					});
				}

				return this.appData.repositories;
			},

			filters() {
				return [
					{
						title: 'Все работы',
						url: '/portfolio'
					},
					...this.appData.years.map(mapTitle),
					...this.appData.languages.map(mapTitle),
					...this.appData.skills.map(mapTitle)
				];
			}
		},

		watch: {
			projects() {
				if (!this.projects.length) {
					this.$router.push('/portfolio');
				}
			}
		}
	};
</script>

<style scoped>
	.projects {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item {
		margin-top: 3rem;
		padding: 0.5rem 0 1rem;
		border-top: 1px solid var(--color-border);
	}

	.bottom {
		justify-content: flex-end;
		margin-top: 3rem;
	}
</style>
