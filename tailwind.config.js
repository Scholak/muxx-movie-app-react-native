/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
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
