/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				// colors
				'blue': '#345FF6',
				'gunmetal': '#253347',
				'dark-electric-blue': '#5E6E85',
				'borders': '#D8E2E7',
				'pure-white': '#FFFFFF',
				'light-blue': '#D6E6FE',
				'transparent-light-blue': 'rgba(214, 252, 254,0.1)',
			},
			gridTemplateColumns: {
				'14': 'repeat(14, minmax(0, 1fr))',
			},
			borderRadius: {
				'right-full': '1rem 8rem 8rem 1rem',
				'b-4xl': '0rem 0rem 2.1875rem 2.1875rem', '4xl': '2.1875rem',
			},

			boxShadow: {
				'xl-blue': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
			},
			// backgroundImage: {
			// 	'custom-gradient-1': 'linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)',
			// 	'custom-gradient-2': 'linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 0%)',
			// },
			fontFamily: {
				inter: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				// headings
				'heading-s': ['1.25rem', { lineHeight: '110%', letterSpacing: '-0.0625rem', fontWeight: '600' }],
				'heading-m': ['1.5rem', { lineHeight: '110%', letterSpacing: '-0.075rem', fontWeight: '600' }],
				'heading-ml': ['2rem', { lineHeight: '110%', letterSpacing: '-0.075rem', fontWeight: '600' }],
				'heading-l': ['3rem', { lineHeight: '110%', letterSpacing: '-0.1rem', fontWeight: '600' }],
				'heading-xl': ['4rem', { lineHeight: '110%', letterSpacing: '-0.2rem', fontWeight: '600' }],

				// body
				'body-s': ['0.875rem', { lineHeight: '150%', fontWeight: '400' }],
				'body-m': ['1rem', { lineHeight: '150%', fontWeight: '400' }],
				'body-m-bold': ['1rem', { lineHeight: '150%', fontWeight: '600' }],
			},
			screens: {
				'mobile': '375px',
				'tablet': '768px',
				'pc': '1440px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
