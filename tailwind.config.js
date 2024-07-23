/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#1b1b1f',
				primary: '#f87171',
				secondary: '#202127',
				accent: '#914F1E'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
