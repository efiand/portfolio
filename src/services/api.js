import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

export default async () =>
	fetch('https://api.efiand.vercel.app/portfolio')
		.then((res) => res.json())
		.then(async ({ bio, repositories }) => {
			const languages = new Set();
			const skills = new Set();
			const years = new Set();

			repositories.forEach((repository) => {
				const topics = repository.topics.filter((topic) => !topic.startsWith('portfolio'));

				repository.languages.forEach((language) => {
					languages.add(language);
				});
				topics.forEach((skill) => {
					skills.add(skill);
				});
				years.add(repository.year);

				repository.langTags = repository.languages.map((language) => language.toLowerCase());
			});

			return {
				about: markdown.render(bio),
				languages: Array.from(languages).sort(),
				repositories: repositories.sort((projectA, projectB) => projectB.id - projectA.id),
				skills: Array.from(skills).sort(),
				years: Array.from(years).sort((yearA, yearB) => yearB - yearA)
			};
		});
