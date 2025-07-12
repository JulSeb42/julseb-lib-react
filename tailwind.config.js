/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
		},
	},
	plugins: [],
}
