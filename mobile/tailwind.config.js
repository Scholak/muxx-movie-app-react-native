/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#ADEA00',
				dark: '#0A0A0A',
				'dark-gray': '#151515',
				gray: '#808080',
				'steel-gray': '#656565',
				'light-gray': '#9A9A9A',
				'off-white': '#F4F4F4',
			},
			borderRadius: {
				'2xl': '1.25rem',
			},
			fontSize: {
				'3xl': '2rem',
				'5xl': '3.5rem',
			},
			fontFamily: {
				'inter-bold': ['InterBold'],
				'inter-extra-bold': ['InterExtraBold'],
				'inter-semi-bold': ['InterSemiBold'],
				'inter-medium': ['InterMedium'],
				'inter-regular': ['InterRegular'],
				'inter-light': ['InterLight'],
				'inter-thin': ['InterThin'],
			},
		},
	},
	plugins: [],
}
