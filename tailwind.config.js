import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				overpass: "'Overpass Variable', sans-serif"
			}
		}
	},

	plugins: [typography]
};
