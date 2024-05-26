/** @type {import('tailwindcss').Config} */
export default {
	// configure the paths to all of your source files
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	// enable dark mode via class strategy
  darkMode: 'class',
	
	theme: {
		extend: {
		// extend base Tailwind CSS utility classes

		},
	},
	// add plugins to your Tailwind CSS project
	plugins: [
		require('preline/plugin'),
		require('@tailwindcss/typography'),
	],
}
