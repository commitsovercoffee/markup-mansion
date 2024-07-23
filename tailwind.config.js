/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#1b1b1f',
				primary: '#EF5A6F',
				secondary: '#161618',
				accent: '#686D76',
				highlight: '#32363f'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
