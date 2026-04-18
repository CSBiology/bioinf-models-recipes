// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

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

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/CSBiology/bioinf-models-recipes',
				},
			],

			// Enable auto sidebar plugin
			plugins: [
				starlightAutoSidebar(),
			],

			sidebar: [
				{
					label: 'Part 0',
					items: [
					{
						label: '1 - Bioinformatics as Models and Recipes',
						slug: 'part-0/bioinformatics-as-models-and-recipes',
					},
					{
						label: '2 - Models and Recipes in Bioinformatics',
						slug: 'part-0/from-biological-questions-to-computational-problems',
					},
					],
				},
				{
					label: 'Part 1',
					autogenerate: { directory: 'Part 1' },
				},
			],
		}),
	],
});
