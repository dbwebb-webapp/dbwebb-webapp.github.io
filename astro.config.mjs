// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WEBAPP',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dbwebb-webapp/dbwebb-webapp.github.io' }],
			sidebar: [
				{ label: 'Kursöversikt', link: '/' },
				{
					label: "Kursmoment",
					items: [
						'kmom/kmom01',
						'kmom/kmom02',
						'kmom/kmom03',
						'kmom/kmom04',
						'kmom/kmom05',
						'kmom/kmom06',
						'kmom/kmom10',
					]
				}
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			pagination: false,
		}),
	],
});
