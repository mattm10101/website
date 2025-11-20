/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'desktop': '1024px',
				'mobile': { 'max': '1023px' }
			}
		}
	},
	plugins: []
};
