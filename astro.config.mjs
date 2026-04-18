// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://username.github.io/bioinf-models-recipes',

	// ONLY apply base in production (GitHub Pages)
	base: import.meta.env.PROD
		? '/bioinf-models-recipes/'
		: '/',

	integrations: [
		starlight({
			title: 'Bioinformatics - Models and Recipes',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CSBiology/bioinf-models-recipes' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

