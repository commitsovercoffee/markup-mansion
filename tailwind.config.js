/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#2c2e35',
				primary: '#f2a23d',
				secondary: '#202127',
				accent: '#686D76',
				highlight: '#32363f'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
