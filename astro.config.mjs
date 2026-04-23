// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://csbiology.github.io/bioinf-models-recipes',

	// ONLY apply base in production (GitHub Pages)
	base: import.meta.env.PROD
		? '/bioinf-models-recipes/'
		: '/',

	integrations: [
		starlight({
			title: {
				en: 'Bioinformatics - Models and Recipes',
				de: 'Bioinformatik - Modelle und Rezepte',
			},

			customCss: [
				'./src/styles/custom.css',
			],			

			locales: {
					en: { label: 'English' },
					de: { label: 'Deutsch' },
				},
				defaultLocale: 'en', // fallback locale

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
					label: 'Part ONE | Foundations of Bioinformatics Thinking',
					translations: {
						de: 'Teil EINS | Grundlagen des bioinformatischen Denkens',
				},
					items: [
					{
						label: '[ 1 ] Bioinformatics as Models and Recipes',
						translations: {
							de: '[ 1 ] Bioinformatik als Modelle und Rezepte',
						},
						slug: 'part-1/bioinformatics-as-models-and-recipes',
					},
					{
						label: '[ 2 ] From Biological Questions to Computational Problems',
						translations: {
							de: '2 | Von biologischen Fragen zu computationalen Problemen',
						},
						slug: 'part-1/from-biological-questions-to-computational-problems',
					},
					],
				},
				{
					label: 'Part TWO | Sequence Models - From Similarity to Evolution',
					translations: {
						de: 'Teil ZWEI | Sequenzmodelle – Von Ähnlichkeit zu Evolution',
					},
					autogenerate: { directory: 'Part 2' },
				},
				{		
					label: 'Part THREE | Learning from Biological Data',
					translations: {
						de: 'Teil DREI | Lernen aus biologischen Daten',
					},
					autogenerate: { directory: 'Part 3' },
				},
				{
					label: 'Part FOUR | Systems Biology - Structure and Dynamics',
					translations: {
						de: 'Teil VIER | Systembiologie - Struktur und Dynamik',
					},
					autogenerate: { directory: 'Part 4' },
				},
				{
					label: 'Part FIVE | Stochastic Biology - From Noise to Function',
					translations: {
						de: 'Teil FÜNF | Stochastische Biologie - Von Rauschen zu Funktion',
					},
					autogenerate: { directory: 'Part 5' },
				},
			],
		}),
	],
});

