// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://CSBiology.github.io/bioinf-models-recipes/',
  integrations: [
    starlight({
      title: 'Bioinformatics - Models and Recipes',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CSBiology/bioinf-models-recipes' },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Introduction', slug: 'guides/introduction' },
            { label: 'Modeling Biological Systems', slug: 'guides/modeling-biological-systems' },
            { label: 'Recipes', slug: 'guides/recipes' },
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
