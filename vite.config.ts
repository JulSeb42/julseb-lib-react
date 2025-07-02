import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import dts from "vite-plugin-dts"
import pluginChecker from "vite-plugin-checker"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			insertTypesEntry: true,
			exclude: [
				"./src/lib/components/*/__preview__",
				"./src/lib/components/*/__tests__",
			],
		}),
		pluginChecker({ typescript: true }),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/lib/index.ts"),
			name: "julseb-lib-react",
			formats: ["es", "umd", "cjs"],
			fileName: format => `index.${format}.js`,
		},

		rollupOptions: {
			external: [
				"react",
				"react-dom",
				"fuse.js",
				"markdown-to-jsx",
				"react-syntax-highlighter",
				"tailwindcss",
				"@julseb-lib/utils",
			],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					tailwindcss: "tailwind",
					"@julseb-lib/utils": "@julseb-lib/utils",
					"fuse.js": "fuse.js",
					"react-syntax-highlighter": "react-syntax-highlighter",
					"markdown-to-jsx": "markdown-to-jsx",
				},
			},
		},
	},
})
