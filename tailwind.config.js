/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#000000',
				'gray-100': '#a4a4a6',
				'dark-100': '#121212',
				'dark-200': '#161616',
				'dark-300': '#171717',
				'light-100': '#f6f6f6',
				white: '#ffffff',
				'gray-200': '#232323',
				'gray-300': '#333333'
			},
			fontFamily: {
				interDisplay: ['Inter Display', 'sans-serif'],
				taruno: ['Taruno Wide'],
			},
			fontWeight: {
				thin: 100,
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700
			}
		}
	},
	plugins: []
};
