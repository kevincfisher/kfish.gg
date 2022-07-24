/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend:{}
	},
	// theme: {
	// 	colors: {
	// 		dark: 'hsl(var(--color-text) / 1)',
	// 		light: 'hsl(var(--color-bg) / 1)',
	// 		lightBorder: 'hsl(var(--color-border) / 1)',
	// 		gradientFrom: 'var(--gradient-from)',
	// 		gradientTo: 'var(--gradient-to)'
	// 	},
	// },
	plugins: [],
	darkMode:'class'
}
