import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--lato)"],
			},
			animation: {},
			keyframes: {},
		},
	},
	plugins: [],
}

// eslint-disable-next-line
export default config
